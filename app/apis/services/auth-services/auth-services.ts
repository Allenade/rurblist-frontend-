'use server';
import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { LoginPayload, LoginResponse, RefreshResponse } from '../../models/login-model';
import { SignupPayload } from '../../models/signup-model';
import { setAuthAccessToken, setRefreshTokenCookie } from '../../utils/auth-cookies';
import { ForgotPasswordPayload, ResetPasswordPayload } from '../../models/password-model';
import { clearAuthCookies } from './logout-service';

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

export async function signupServer(data: SignupPayload): Promise<ApiResponse<null>> {
  const res = await api.post<null>('/auth/register', data);

  return res;
}

export async function verifyOtpServer(data: { email: string; otp: string }) {
  const res = await api.post<null>('/auth/verify-otp', data);

  return res;
}

export async function resendOtpServer(email: string) {
  const res = await api.post<null>('/auth/resend-otp', { email });

  return res;
}

export async function refreshTokenServer(): Promise<ApiResponse<RefreshResponse>> {
  const res = await api.post<RefreshResponse>('/auth/refresh-token');

  if (res.statusCode < 400) {
    const accessToken = res.data?.accessToken;
    const refreshToken = res.data?.refreshToken;

    if (accessToken && refreshToken) {
      await setAuthAccessToken(accessToken);
      await setRefreshTokenCookie(refreshToken);
    }
  }
  return res;
}

export async function forgotPasswordServer(data: ForgotPasswordPayload) {
  const res = await api.post<null>('/auth/forgot-password', data);

  return res;
}

export async function resetPasswordServer(data: ResetPasswordPayload) {
  const res = await api.post<null>('/auth/reset-password', data);

  return res;
}

export async function verifyGoogleOtpServer(otp: string): Promise<ApiResponse<RefreshResponse>> {
  const res = await api.post<RefreshResponse>('/auth/verify-google-otp', { otp });

  if (res.statusCode < 400) {
    const accessToken = res.data?.accessToken;
    const refreshToken = res.data?.refreshToken;

    if (accessToken && refreshToken) {
      await setAuthAccessToken(accessToken);
      await setRefreshTokenCookie(refreshToken);
    }
  }
  return res;
}

export async function loginServer(data: LoginPayload): Promise<ApiResponse<LoginResponse>> {
  const res = await api.post<LoginResponse>('/auth/login', data);

  if (res.statusCode < 400) {
    const accessToken = res.data?.token;
    const refreshToken = res.data?.refreshToken;

    if (accessToken && refreshToken) {
      await setAuthAccessToken(accessToken);
      await setRefreshTokenCookie(refreshToken);
    }
  }
  return res;
}

export async function logoutServer(): Promise<ApiResponse<null>> {
  const res = await api.authPost<null>('/auth/logout');

  await clearAuthCookies();

  return res;
}
