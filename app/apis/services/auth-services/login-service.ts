'use server';

import { ApiResponse } from '../../base-response';
import { getErrorMessage } from '../../errors';
import { LoginPayload, LoginResponse } from '../../models/login-model';
import { API_URL } from '../../utils/api-links';
import { setAuthAccessToken, setRefreshTokenCookie } from '../../utils/auth-cookies';

const DEFAULT_TIMEOUT = 10000;

export async function Login(options?: { payload?: unknown }): Promise<ApiResponse<LoginResponse>> {
  const { payload } = options || {};

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);

  try {
    const url = new URL(`/api/auth/login`, API_URL);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      credentials: 'include',
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const parsed = await response.json();

    if (!response.ok) {
      return {
        error: parsed?.error ?? 'Request failed',
        message: getErrorMessage(parsed) ?? parsed?.message ?? 'Something went wrong',
        statusCode: response.status,
      };
    }

    return {
      data: parsed.data,
      message: parsed?.message ?? 'Success',
      statusCode: response.status,
    };
  } catch (error) {
    console.error('REQUEST ERROR:', error);

    return {
      error: 'Network Error',
      message: 'Unable to connect to server',
      statusCode: 500,
    };
  }
}

export async function login(data: LoginPayload): Promise<ApiResponse<LoginResponse>> {
  const res = await Login({ payload: data });
  console.log(res);
  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  const accessToken = res.data?.token;
  const refreshToken = res.data?.refreshToken;

  if (!accessToken) {
    throw new Error('Access token missing from response');
  }

  if (!refreshToken) {
    throw new Error('Refresh token missing from response');
  }

  await setAuthAccessToken(accessToken);
  await setRefreshTokenCookie(refreshToken);

  return res;
}
