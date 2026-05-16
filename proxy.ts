import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTHENTICATION_COOKIE, REFRESH_TOKEN } from './src/shared/config/api-links';
import {
  appRoutes,
  getDefaultRouteForRole,
  Permission,
  Role,
  rolePermissions,
} from './src/shared/config/routes';
import { getTokenRoles } from './src/shared/utils/decode-token';

const routeMatchers = appRoutes
  .slice()
  .sort((a, b) => b.path.length - a.path.length)
  .map((route) => ({
    route,
    pattern: createRoutePattern(route.path),
  }));

function createRoutePattern(path: string) {
  const segments = path.split('/').map((segment) => {
    if (/^\[[^\]]+\]$/.test(segment)) {
      return '[^/]+';
    }

    return segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  });

  return new RegExp(`^${segments.join('/')}$`);
}

function matchRoute(pathname: string) {
  return routeMatchers.find(({ pattern }) => pattern.test(pathname))?.route;
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

  const userRoles = token ? getTokenRoles(token) : [];
  const primaryRole = userRoles[0];

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
