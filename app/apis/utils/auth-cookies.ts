'use server';

import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { AUTHENTICATION_COOKIE, REFRESH_TOKEN } from './api-links';

type DecodedJwt = {
  exp?: number;
};

function getCookieExpiry(token: string, fallbackMs: number) {
  const decoded = jwtDecode<DecodedJwt>(token);

  return decoded.exp ? new Date(decoded.exp * 1000) : new Date(Date.now() + fallbackMs);
}

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
    expires: getCookieExpiry(token, 15 * 60 * 1000),
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
    expires: getCookieExpiry(token, 7 * 24 * 60 * 60 * 1000),
  });
}
