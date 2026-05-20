'use server';

import { clearAuthCookies as clearSessionAuthCookies } from '@/shared/auth/session-server';

export async function clearAuthCookies() {
  return clearSessionAuthCookies();
}
