"use server"

import { jwtDecode } from "jwt-decode";
import { ApiResponse } from "../../base-response";
import { api } from "../../call-apis";
import { LoginPayload, LoginResponse, RefreshResponse } from "../../models/login-model";
import { SignupPayload } from "../../models/signup-model";
import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "../../utils/api-links";
import { ForgotPasswordPayload, ResetPasswordPayload } from "../../models/password-model";

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};



export async function login(data: LoginPayload): Promise<ApiResponse<LoginResponse>> {
  const res = await api.post<LoginResponse>("/auth/login", data);
  const token = res.data?.token;
  if (res.statusCode >= 400) {
    console.log(res.message)
    throw new Error(res.message);
  }
  console.log(token)
  if (!token) {
    throw new Error("Token missing from response");
  }

  await setAuthCookie(token)
  return res;
}

export async function signup(data: SignupPayload): Promise<ApiResponse<null>>{
  const res = await api.post<null>("/auth/create-user", data);
  if (res.error) {
    throw new Error(res.message);
  }

  return res;
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

export async function refreshToken(): Promise<ApiResponse<RefreshResponse>> {
  const res = await api.post<RefreshResponse>(
    "/auth/refresh"
  );
   const token=res.data?.accessToken;
  if (res.statusCode >= 400 || !res.data?.accessToken) {
    throw new Error(res.message);
  }
  if (!token) {
    throw new Error("Token missing from response");
  }
   await setAuthCookie(token)
  return res;
}

export async function forgotPassword(
  data: ForgotPasswordPayload
) {
  const res = await api.post<null>(
    "/auth/forgot-password",
    data
  );

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}
export async function resetPassword(
  data: ResetPasswordPayload
) {
  const res = await api.post<null>(
    "/auth/reset-password",
    data
  );

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function verifyGoogleOtp(otp: string): Promise<ApiResponse<RefreshResponse>> {
  const res = await api.post<RefreshResponse>(
    "/auth/verify-google-otp",
    { otp }
  );
    const token=res.data?.accessToken;
  if (res.statusCode >= 400 || !token) {
    throw new Error(res.message);
  }
   await setAuthCookie(token)
  return res;
}
const setAuthCookie = async (token: string) => {
  const cookieStore = await cookies();

  const decoded: any = jwtDecode(token);
  const isProduction = process.env.NODE_ENV === "production";
  cookieStore.set({
    name: AUTHENTICATION_COOKIE,
    value: token,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
    expires: new Date(decoded.exp * 1000),
  });
};