import { api } from "../../call-apis";
import { AuthUser } from "../auth-services/auth-services";

export async function getCurrentUser() {
  const res = await api.authGet<AuthUser>("/auth/me");

  if (res.error) {
    throw new Error(res.message);
  }

  return res.data;
}