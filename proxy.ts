import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTHENTICATION_COOKIE, ROLE_COOKIE } from "./app/apis/utils/api-links";
import { appRoutes, getDefaultRouteForRole, Role, rolePermissions } from "./app/apis/utils/routes";
import { decodeToken } from "./app/apis/utils/decode-token";



function matchRoute(pathname: string) {
  return appRoutes.find(
    (route) =>
      pathname === route.path ||
      pathname.startsWith(`${route.path}/`)
  );
}
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get(AUTHENTICATION_COOKIE)?.value;
  console.log(token)
 let role: Role | undefined;

if (token) {
  try {
    const decoded = decodeToken(token);
    role = decoded?.role as Role | undefined;
  } catch {
    role = undefined;
  }
}

  const route = matchRoute(pathname);
  
   
  /* ================= PUBLIC ROUTES ================= */

  if (route?.public) {
    // If logged in, prevent visiting login pages
    if (token && role) {
      return NextResponse.redirect(
        new URL(getDefaultRouteForRole(role), request.url)
      );
    }

    return NextResponse.next();
  }

  /* ================= REQUIRE AUTH ================= */

  if (!token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

   /* ================= ROLE CHECK ================= */

  if (route?.roles && role && !route.roles.includes(role)) {
    return NextResponse.redirect(
      new URL("/unauthorized", request.url)
    );
  }
  /* ================= PERMISSION CHECK ================= */

  if (route?.permissions && role) {
    const permissions = rolePermissions[role] ?? [];

    const hasPermission = route.permissions.every((p) =>
      permissions.includes(p)
    );

    if (!hasPermission) {
      return NextResponse.redirect(
        new URL("/unauthorized", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};