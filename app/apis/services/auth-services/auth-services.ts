'use server';

import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { RefreshResponse } from '../../models/login-model';
import { SignupPayload } from '../../models/signup-model';
import { setAuthAccessToken, setRefreshTokenCookie } from '../../utils/auth-cookies';
import { ForgotPasswordPayload, ResetPasswordPayload } from '../../models/password-model';

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

export async function signup(data: SignupPayload): Promise<ApiResponse<null>> {
  const res = await api.post<null>('/auth/register', data);
  if (res.error) {
    throw new Error(res.message);
  }

  return res;
}

export async function verifyOtp(data: { email: string; otp: string }) {
  const res = await api.post<null>('/auth/verify-otp', data);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function resendOtp(email: string) {
  const res = await api.post<null>('/auth/resend-otp', { email });

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function refreshToken(): Promise<ApiResponse<RefreshResponse>> {
  const res = await api.post<RefreshResponse>('/auth/refresh-token');
  const token = res.data?.accessToken;
  const refreshToken = res.data?.refreshToken;

  if (res.statusCode >= 400 || !token || !refreshToken) {
    throw new Error(res.message);
  }

  if (!token) {
    throw new Error('Token missing from response');
  }

  await setAuthAccessToken(token);
  await setRefreshTokenCookie(refreshToken);
  return res;
}

export async function forgotPassword(data: ForgotPasswordPayload) {
  const res = await api.post<null>('/auth/forgot-password', data);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function resetPassword(data: ResetPasswordPayload) {
  const res = await api.post<null>('/auth/reset-password', data);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function verifyGoogleOtp(otp: string): Promise<ApiResponse<RefreshResponse>> {
  const res = await api.post<RefreshResponse>('/auth/verify-google-otp', { otp });
  const token = res.data?.accessToken;
  const refreshToken = res.data?.refreshToken;
  if (res.statusCode >= 400 || !token || !refreshToken) {
    throw new Error(res.message);
  }
  await setAuthAccessToken(token);
  await setRefreshTokenCookie(refreshToken);
  return res;
}
