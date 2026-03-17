import { ApiResponse } from "../../base-response";
import { api } from "../../call-apis";
import { UserModel } from "../../models/user-model";

export async function getCurrentUser():Promise<ApiResponse<UserModel>> {
  const res = await api.authGet<UserModel>("/user/me");

  if (res.error) {
    throw new Error(res.message);
  }

  return res;
}