// app/apis/services/auth-services/logout-service.ts
'use server';

import { AUTHENTICATION_COOKIE, REFRESH_TOKEN, ROLE_COOKIE } from '../../utils/api-links';
import { cookies } from 'next/headers';
import { api } from '../../call-apis';
import { ApiResponse } from '../../base-response';

export async function clearAuthCookies() {
  const cookieStore = await cookies();

  cookieStore.delete(AUTHENTICATION_COOKIE);
  cookieStore.delete(REFRESH_TOKEN);
  cookieStore.delete(ROLE_COOKIE);
}

export async function logout(): Promise<ApiResponse<null>> {
  const res = await api.authPost<null>('/auth/logout');

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  await clearAuthCookies();

  return res;
}
