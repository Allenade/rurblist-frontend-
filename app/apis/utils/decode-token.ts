import { jwtDecode } from 'jwt-decode';

export type DecodedToken = {
  id?: string;
  email?: string;
  roles?: ['Home_Seeker' | 'Agent' | 'Landlord'];
  role?: string;
  exp: number;
};

export function decodeToken(token: string): DecodedToken | null {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch {
    return null;
  }
}
