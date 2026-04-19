'use client';
import { ApiResponse } from '../../base-response';
import { LoginPayload, LoginResponse, RefreshResponse } from '../../models/login-model';
import { SignupPayload } from '../../models/signup-model';
import { ForgotPasswordPayload, ResetPasswordPayload } from '../../models/password-model';
import {
  forgotPasswordServer,
  loginServer,
  logoutServer,
  refreshTokenServer,
  resendOtpServer,
  resetPasswordServer,
  signupServer,
  verifyGoogleOtpServer,
  verifyOtpServer,
} from './auth-services';

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

export async function signup(data: SignupPayload): Promise<ApiResponse<null>> {
  const res = await signupServer(data);
  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function verifyOtp(data: { email: string; otp: string }) {
  const res = await verifyOtpServer(data);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function resendOtp(email: string) {
  const res = await resendOtpServer(email);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function refreshToken(): Promise<ApiResponse<RefreshResponse>> {
  const res = await refreshTokenServer();
  const token = res.data?.accessToken;
  const refreshToken = res.data?.refreshToken;

  if (res.statusCode >= 400 || !token || !refreshToken) {
    throw new Error(res.message);
  }

  return res;
}

export async function forgotPassword(data: ForgotPasswordPayload) {
  const res = await forgotPasswordServer(data);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function resetPassword(data: ResetPasswordPayload) {
  const res = await resetPasswordServer(data);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function verifyGoogleOtp(otp: string): Promise<ApiResponse<RefreshResponse>> {
  const res = await verifyGoogleOtpServer(otp);
  const token = res.data?.accessToken;
  const refreshToken = res.data?.refreshToken;
  console.log(token);
  if (res.statusCode >= 400 || !token || !refreshToken) {
    throw new Error(res.message);
  }

  return res;
}

export async function login(data: LoginPayload): Promise<ApiResponse<LoginResponse>> {
  const res = await loginServer(data);
  console.log(res);
  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  const accessToken = res.data?.token;
  const refreshToken = res.data?.refreshToken;

  if (!accessToken) {
    throw new Error('Access token missing from response');
  }

  if (!refreshToken) {
    throw new Error('Refresh token missing from response');
  }

  return res;
}

export async function logout(): Promise<ApiResponse<null>> {
  const res = await logoutServer();

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}
