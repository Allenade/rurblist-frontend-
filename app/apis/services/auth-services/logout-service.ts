// app/apis/services/auth-services/logout-service.ts
'use server';

import { AUTHENTICATION_COOKIE, REFRESH_TOKEN, ROLE_COOKIE } from '../../utils/api-links';
import { cookies } from 'next/headers';

export async function clearAuthCookies() {
  const cookieStore = await cookies();

  cookieStore.delete(AUTHENTICATION_COOKIE);
  cookieStore.delete(REFRESH_TOKEN);
  cookieStore.delete(ROLE_COOKIE);
}
