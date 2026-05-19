export type ForgotPasswordPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  email: string;
  otp: string;
  password: string;
};