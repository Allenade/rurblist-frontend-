import { AppRoute, appRoutes, Role } from '@/app/apis/utils/routes';

const navbarPathsByRole: Partial<Record<Role, Array<{ path: string; title?: string }>>> = {
  Home_Seeker: [
    { path: '/', title: 'Home' },
    { path: '/property', title: 'Property' },
    { path: '/agent/request', title: 'Become an Agent' },
    { path: '/property-advisory', title: 'Property Advisory' },
  ],
  Agent: [
    { path: '/', title: 'Home' },
    { path: '/property', title: 'Property' },
    { path: '/list-properties', title: 'List Property' },
    { path: '/property-advisory', title: 'Property Advisory' },
  ],
  Landlord: [
    { path: '/', title: 'Home' },
    { path: '/property', title: 'Property' },
    { path: '/list-properties', title: 'List Property' },
    { path: '/property-advisory', title: 'Property Advisory' },
  ],
  Admin: [
    { path: '/', title: 'Home' },
    { path: '/property', title: 'Property' },
  ],
};

export function getNavbarRoutes(roleOrRoles?: Role | Role[]): AppRoute[] {
  if (!roleOrRoles) return [];

  const roles = Array.isArray(roleOrRoles) ? roleOrRoles : [roleOrRoles];
  const seenPaths = new Set<string>();

  return roles.reduce<AppRoute[]>((routes, role) => {
    const roleNavItems = navbarPathsByRole[role] ?? [];

    roleNavItems.forEach(({ path, title }) => {
      if (seenPaths.has(path)) {
        return;
      }

      const route = appRoutes.find((item) => item.path === path);

      if (!route) {
        return;
      }
      const isPublicRoute = route.public === true;
      const roleCanAccessRoute = route.roles?.includes(role);

      if (!isPublicRoute && !roleCanAccessRoute) {
        return;
      }

      seenPaths.add(path);
      routes.push({
        ...route,
        title: title ?? route.title,
      });
    });

    return routes;
  }, []);
}
