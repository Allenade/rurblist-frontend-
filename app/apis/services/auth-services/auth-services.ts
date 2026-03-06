
import { ApiResponse } from "../../base-response";
import { api } from "../../call-apis";


export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};


export interface SignupPayload {
  fullName: string
  phoneNumber: string
  password: string
  email: string
  role: string
}

export async function login(data: LoginPayload) {
  const res = await api.post<AuthUser>("/auth/login", data);

  if (res.statusCode >= 400) {
    console.log(res.message)
    throw new Error(res.message);
  }

  return res.data;
}

export async function signup(data: SignupPayload): Promise<ApiResponse<null>>{
  const res = await api.post<null>("/auth/create-user", data);
  if (res.error) {
    throw new Error(res.message);
  }

  return res;
}

export async function getCurrentUser() {
  const res = await api.authGet<AuthUser>("/auth/me");

  if (res.error) {
    throw new Error(res.message);
  }

  return res.data;
}

export async function verifyOtp(data: {
  email: string;
  otp: string;
}) {
  const res = await api.post<null>("/auth/verify-otp", data);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function resendOtp(email: string) {
  const res = await api.post<null>("/auth/resend-otp", { email });

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}