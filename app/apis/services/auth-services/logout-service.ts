"use server";

import { broadcastLogout } from "../../utils/auth-channel";
import { AUTHENTICATION_COOKIE, REFRESH_TOKEN, ROLE_COOKIE } from "../../utils/api-links";
import { cookies } from "next/headers";
import { api } from "../../call-apis";
import { ApiResponse } from "../../base-response";


export async function clearAuthAndRedirect() {
  const cookieStore = await cookies();

  cookieStore.delete(AUTHENTICATION_COOKIE);
  cookieStore.delete(REFRESH_TOKEN);
  cookieStore.delete(ROLE_COOKIE);
  broadcastLogout();
}


export async function logout(): Promise<ApiResponse<null>> {
  const res = await api.authPost<null>("/auth/logout");

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}