'use server';

import { cookies } from 'next/headers';
import { API_URL } from '@/shared/config/api-links';
import { setAuthAccessToken, setRefreshTokenCookie } from '@/shared/utils/auth-cookies';
import type { ApiResponse } from './base-response';

export type RefreshResponse = {
  accessToken: string;
  refreshToken: string;
};

export async function refreshTokenServer(): Promise<ApiResponse<RefreshResponse>> {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const response = await fetch(new URL('/api/v1/auth/refresh-token', API_URL), {
    method: 'POST',
    headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
    cache: 'no-store',
    credentials: 'include',
  });

  const res = (await response.json()) as ApiResponse<RefreshResponse>;

  if (response.ok) {
    const accessToken = res.data?.accessToken;
    const refreshToken = res.data?.refreshToken;

    if (accessToken && refreshToken) {
      await setAuthAccessToken(accessToken);
      await setRefreshTokenCookie(refreshToken);
    }
  }

  return res;
}
