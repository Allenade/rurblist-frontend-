import { AppRoute, appRoutes, Role } from '@/app/apis/utils/routes';

const navbarPathsByRole: Partial<Record<Role, Array<{ path: string; title?: string }>>> = {
  Home_Seeker: [
    { path: '/', title: 'Home' },
    { path: '/property', title: 'Property' },
    { path: '/agent/agreement', title: 'Become an Agent' },
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

export function getNavbarRoutes(role?: Role): AppRoute[] {
  if (!role) return [];

  const roleNavItems = navbarPathsByRole[role] ?? [];

  return roleNavItems.reduce<AppRoute[]>((routes, { path, title }) => {
    const route = appRoutes.find((item) => item.path === path);

    if (!route || route.public || !route.roles?.includes(role)) {
      return routes;
    }

    routes.push({
      ...route,
      title: title ?? route.title,
    });

    return routes;
  }, []);
}
