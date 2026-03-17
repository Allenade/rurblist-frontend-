"use client";

import { broadcastLogout } from "../../utils/auth-channel";
import { clearAuthAndRedirect } from "./logout-service";

export async function logoutClient() {
  await clearAuthAndRedirect();

  broadcastLogout();

  window.location.href = "/login";
}