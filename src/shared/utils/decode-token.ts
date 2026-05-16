import { jwtDecode } from 'jwt-decode';
import { roles, type Role } from '@/shared/config/routes';

const validRoles = new Set<Role>(roles);

export type DecodedToken = {
  id?: string;
  email?: string;
  roles?: unknown[];
  role?: unknown;
  exp?: number;
};

export function decodeToken(token: string): DecodedToken | null {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch {
    return null;
  }
}

export function isRole(value: unknown): value is Role {
  return typeof value === 'string' && validRoles.has(value as Role);
}

export function getTokenRoles(token: string): Role[] {
  const decoded = decodeToken(token);

  if (!decoded) {
    return [];
  }

  if (decoded.roles?.length) {
    return decoded.roles.filter(isRole);
  }

  if (isRole(decoded.role)) {
    return [decoded.role];
  }

  return [];
}

export function getTokenExpiryDate(token: string, fallbackMs: number) {
  const decoded = decodeToken(token);

  return decoded?.exp ? new Date(decoded.exp * 1000) : new Date(Date.now() + fallbackMs);
}
