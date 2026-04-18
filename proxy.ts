import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTHENTICATION_COOKIE, REFRESH_TOKEN } from './app/apis/utils/api-links';
import {
  appRoutes,
  getDefaultRouteForRole,
  Permission,
  Role,
  rolePermissions,
} from './app/apis/utils/routes';
import { decodeToken } from './app/apis/utils/decode-token';

function matchRoute(pathname: string) {
  return appRoutes.find(
    (route) => pathname === route.path || pathname.startsWith(`${route.path}/`),
  );
}

function getUserRolesFromToken(token: string): Role[] {
  const decoded = decodeToken(token) as {
    role?: Role;
    roles?: Role[];
  } | null;

  if (!decoded) {
    return [];
  }

  if (decoded.roles?.length) {
    return decoded.roles;
  }

  if (decoded.role) {
    return [decoded.role];
  }

  return [];
}

function hasRouteAccess(userRoles: Role[], routeRoles?: Role[]) {
  if (!routeRoles?.length) {
    return true;
  }

  return userRoles.some((role) => routeRoles.includes(role));
}

function hasRoutePermissions(userRoles: Role[], requiredPermissions?: Permission[]) {
  if (!requiredPermissions?.length) {
    return true;
  }

  return userRoles.some((role) => {
    const permissions = rolePermissions[role] ?? [];
    return requiredPermissions.every((permission) => permissions.includes(permission));
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get(AUTHENTICATION_COOKIE)?.value;
  const refreshToken = request.cookies.get(REFRESH_TOKEN)?.value;
  console.log('Authentication token:', token);

  const userRoles = token ? getUserRolesFromToken(token) : [];
  const primaryRole = userRoles[0];
  console.log('User roles:', userRoles[0]);

  const route = matchRoute(pathname);

  if (pathname === '/') {
    return NextResponse.next();
  }

  if (route?.public) {
    if (token && primaryRole && (pathname === '/login' || pathname === '/signup')) {
      return NextResponse.redirect(new URL(getDefaultRouteForRole(primaryRole), request.url));
    }

    return NextResponse.next();
  }

  if (!token && !refreshToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (!token && refreshToken) {
    return NextResponse.next();
  }

  if (userRoles.length === 0) {
    return NextResponse.next();
  }

  if (route?.roles && !hasRouteAccess(userRoles, route.roles)) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  if (route?.permissions && !hasRoutePermissions(userRoles, route.permissions)) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
