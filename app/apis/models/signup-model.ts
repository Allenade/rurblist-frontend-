export interface SignupPayload {
  fullName: string
  phoneNumber: string
  password: string
  email: string
  role: string
}

export type SignupData = {
  fullName: string
  phoneNumber: string
  password: string
  email: string
  role?: string
};
