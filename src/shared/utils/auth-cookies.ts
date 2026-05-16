'use server';

import { cookies } from 'next/headers';
import { AUTHENTICATION_COOKIE, REFRESH_TOKEN } from '@/shared/config/api-links';
import { getTokenExpiryDate } from '@/shared/utils/decode-token';

export async function setAuthAccessToken(token: string) {
  const cookieStore = await cookies();
  const isProduction = process.env.NODE_ENV === 'production';

  cookieStore.set({
    name: AUTHENTICATION_COOKIE,
    value: token,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    path: '/',
    expires: getTokenExpiryDate(token, 15 * 60 * 1000),
  });
}

export async function setRefreshTokenCookie(token: string) {
  const cookieStore = await cookies();
  const isProduction = process.env.NODE_ENV === 'production';

  cookieStore.set({
    name: REFRESH_TOKEN,
    value: token,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    path: '/',
    expires: getTokenExpiryDate(token, 7 * 24 * 60 * 60 * 1000),
  });
}
