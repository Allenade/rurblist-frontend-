import { jwtDecode } from "jwt-decode";

export type DecodedToken = {
  id: string;
  email: string;
  role: "Home_Seeker" | "Agent" | "Landlord";
  exp: number;
};

export function decodeToken(token: string): DecodedToken | null {
  try {

    return jwtDecode<DecodedToken>(token);
  } catch {
    return null;
  }
}


