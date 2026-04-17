// app/apis/services/auth-services/logout-client.ts
'use client';

import { broadcastLogout } from '../../utils/auth-channel';

export function logoutClient() {
  broadcastLogout();
  window.location.href = '/login';
}
