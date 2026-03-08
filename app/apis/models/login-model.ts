export type LoginResponse = {
  token: string;
};

export type RefreshResponse = {
  accessToken: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};