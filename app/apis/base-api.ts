'use server';

import { cookies } from 'next/headers';
import { ApiResponse, HttpMethod } from './base-response';
import { getErrorMessage } from './errors';
import { API_URL, AUTHENTICATION_COOKIE } from './utils/api-links';
import {
  subscribeTokenRefresh,
  onRefreshed,
  getRefreshing,
  setRefreshing,
} from './utils/token-manager';
import { clearAuthCookies } from './services/auth-services/logout-service';
import { refreshToken } from './services/auth-services/auth-service-client';

const DEFAULT_TIMEOUT = 140000; // 2 minutes

function buildErrorResponse(message: string, statusCode: number, error = 'Request failed') {
  return {
    error,
    message,
    statusCode,
  };
}

export async function request<T = unknown>(
  method: HttpMethod,
  path: string,
  options?: {
    payload?: unknown;
    protected?: boolean;
    retries?: number;
  },
): Promise<ApiResponse<T>> {
  const { payload, protected: protectedRoute, retries = 1 } = options || {};

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTHENTICATION_COOKIE!)?.value;

    const headers: HeadersInit = {};

    const isFormData = payload instanceof FormData;

    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }

    if (protectedRoute && token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    /* forward cookies to backend */
    const cookieHeader = cookieStore.toString();
    if (cookieHeader) {
      headers['Cookie'] = cookieHeader;
    }

    const url = new URL(`/api${path}`, API_URL);
    console.log(url);
    const response = await fetch(url, {
      method,
      headers,
      body:
        method !== 'GET' && payload
          ? payload instanceof FormData
            ? payload
            : JSON.stringify(payload)
          : undefined,
      cache: 'no-store',
      signal: controller.signal,
      credentials: 'include',
    });

    clearTimeout(timeout);

    const contentType = response.headers.get('content-type');

    let parsed: any = null;

    if (contentType?.includes('application/json')) {
      parsed = await response.json();
    }

    /* ======================
      🔄 AUTO REFRESH LOGIC
    ====================== */

    if ((response.status === 401 || response.status === 403) && protectedRoute) {
      if (!getRefreshing()) {
        setRefreshing(true);

        try {
          const refreshRes = await refreshToken();

          const newToken = refreshRes?.data?.accessToken;

          if (!newToken) {
            throw new Error('Refresh failed');
          }

          // notify waiting requests
          onRefreshed(newToken);

          setRefreshing(false);

          const retryHeaders: HeadersInit = {
            ...headers,
            Authorization: `Bearer ${newToken}`,
          };

          const retryResponse = await fetch(url, {
            method,
            headers: retryHeaders,
            body:
              method !== 'GET' && payload
                ? payload instanceof FormData
                  ? payload
                  : JSON.stringify(payload)
                : undefined,
            cache: 'no-store',
            signal: controller.signal,
            credentials: 'include',
          });

          const retryContentType = retryResponse.headers.get('content-type');
          let retryParsed: any = null;

          if (retryContentType?.includes('application/json')) {
            retryParsed = await retryResponse.json();
          }

          if (!retryResponse.ok || retryParsed?.error || retryParsed?.statusCode >= 400) {
            return buildErrorResponse(
              getErrorMessage(retryParsed) ?? retryParsed?.message ?? 'Something went wrong',
              retryParsed?.statusCode ?? retryResponse.status,
              retryParsed?.error ?? 'Request failed',
            );
          }

          return {
            data: retryParsed.data,
            message: retryParsed.message ?? 'Success',
            statusCode: retryResponse.status,
          };
        } catch (error) {
          setRefreshing(false);
          await clearAuthCookies();

          return buildErrorResponse('Session expired. Please login again.', 401, 'SESSION_EXPIRED');
        }
      }

      /* ===== WAIT FOR TOKEN REFRESH ===== */

      return new Promise((resolve) => {
        subscribeTokenRefresh(async (newToken: string) => {
          const retryHeaders: HeadersInit = {
            ...headers,
            Authorization: `Bearer ${newToken}`,
          };

          const retryResponse = await fetch(url, {
            method,
            headers: retryHeaders,
            body:
              method !== 'GET' && payload
                ? payload instanceof FormData
                  ? payload
                  : JSON.stringify(payload)
                : undefined,
            cache: 'no-store',
            signal: controller.signal,
            credentials: 'include',
          });

          const retryContentType = retryResponse.headers.get('content-type');
          let retryParsed: any = null;

          if (retryContentType?.includes('application/json')) {
            retryParsed = await retryResponse.json();
          }

          if (!retryResponse.ok || retryParsed?.error || retryParsed?.statusCode >= 400) {
            resolve(
              buildErrorResponse(
                getErrorMessage(retryParsed) ?? retryParsed?.message ?? 'Something went wrong',
                retryParsed?.statusCode ?? retryResponse.status,
                retryParsed?.error ?? 'Request failed',
              ),
            );
            return;
          }

          resolve({
            data: retryParsed.data,
            message: retryParsed.message ?? 'Success',
            statusCode: retryResponse.status,
          });
        });
      });
    }

    if (!response.ok || parsed?.error || parsed?.statusCode >= 400) {
      return buildErrorResponse(
        getErrorMessage(parsed) ?? parsed?.message ?? 'Something went wrong',
        parsed?.statusCode ?? response.status,
        parsed?.error ?? 'Request failed',
      );
    }

    return {
      data: parsed.data,
      message: parsed?.message ?? 'Success',
      statusCode: response.status,
    };
  } catch (error) {
    if (retries > 0) {
      return request(method, path, {
        payload,
        protected: protectedRoute,
        retries: retries - 1,
      });
    }
    console.error('REQUEST ERROR:', error);
    return {
      error: 'Network Error',
      message: 'Unable to connect to server',
      statusCode: 500,
    };
  }
}
