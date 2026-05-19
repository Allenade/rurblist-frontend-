import type { Role } from '@/shared/config/routes';

export interface SignupPayload {
  fullName: string;
  phoneNumber: string;
  password: string;
  email: string;
  role: Role;
}

export type SignupData = {
  fullName: string;
  phoneNumber: string;
  password: string;
  email: string;
  role?: Role;
};
