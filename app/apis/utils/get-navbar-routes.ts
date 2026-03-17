import { appRoutes, Role } from "@/app/apis/utils/routes";

export function getNavbarRoutes(role?: Role) {
  return appRoutes.filter((route) => {
    if (!route.title) return false;

    // hide auth pages
    if (route.public) return false;

    if (!role) return false;

    return route.showInNaBar&& route.roles?.includes(role);
  });
}