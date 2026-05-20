'use client';

import { broadcastLogout } from '@/shared/utils/auth-channel';

export function logoutClient() {
  broadcastLogout();
  window.location.href = '/login';
}
