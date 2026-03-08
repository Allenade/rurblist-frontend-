
import { cookies } from "next/headers";
import { ApiResponse, HttpMethod } from "./base-response";
import { getErrorMessage } from "./errors";
import { API_URL, AUTHENTICATION_COOKIE } from "./utils/api-links";
import { clearAuthAndRedirect } from "./services/auth-services/logout-service";
import { refreshToken } from "./services/auth-services/auth-services";
import { RefreshResponse } from "./models/login-model";


const AUTH_COOKIE = "auth_token";

const DEFAULT_TIMEOUT = 10000;

export async function request<T = unknown>(
  method: HttpMethod,
  path: string,
  options?: {
    payload?: unknown;
    protected?: boolean;
    retries?: number;
  }
): Promise<ApiResponse<T>> {
  let isRefreshing = false;
  let refreshPromise: Promise<ApiResponse<RefreshResponse>> | null = null;
  const { payload, protected: protectedRoute, retries = 1 } = options || {};

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTHENTICATION_COOKIE!)?.value;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (protectedRoute && token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const url = new URL(`/api${path}`, API_URL);

    const response = await fetch(url, {
      method,
      headers,
      body:
        method !== "GET" && payload
          ? JSON.stringify(payload)
          : undefined,
      cache: "no-store",
      signal: controller.signal,
      credentials: "include", // REQUIRED
    });

    clearTimeout(timeout);
   
    const contentType = response.headers.get("content-type");

    let parsed: any = null;

    if (contentType?.includes("application/json")) {
      parsed = await response.json();
    }
     
        
    /* ======================
      🔄 AUTO REFRESH LOGIC
    ====================== */

    if (response.status === 403 && protectedRoute) {
  try {
        // If no refresh is running, start one
        if (!isRefreshing) {
          isRefreshing = true;

          refreshPromise = refreshToken()
            .finally(() => {
              isRefreshing = false;
            });
        }

        // Wait for refresh to finish
        const newToken = await refreshPromise;

        if (newToken?.success==false) {
          throw new Error("Unable to refresh token");
        }

        // Retry original request with new token
        headers["Authorization"] = `Bearer ${newToken?.data?.accessToken}`;

        const retryResponse = await fetch(url, {
          method,
          headers,
          body:
            method !== "GET" && payload
              ? JSON.stringify(payload)
              : undefined,
          credentials: "include",
        });

        const retryParsed = await retryResponse.json();

        if (!retryResponse.ok) {
          throw new Error(
            retryParsed?.message || "Retry request failed"
          );
        }

        return {
          data: retryParsed.data,
          message: retryParsed?.message ?? "Success",
          statusCode: retryResponse.status,
        };
      } catch (err) {
        clearAuthAndRedirect();
        throw new Error("Session expired. Please login again.");
      }
    }


    if (!response.ok || parsed?.error || parsed?.statusCode >= 400) {
      return {
        error: parsed?.error ?? "Request failed",
        message:
          getErrorMessage(parsed) ??
          parsed?.message ??
          "Something went wrong",
        statusCode: parsed?.statusCode ?? response.status,
      };
      
    }

    return {
      data: parsed.data,
      message: parsed?.message ?? "Success",
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

    return {
      error: "Network Error",
      message: "Unable to connect to server",
      statusCode: 500,
    };
  }
}