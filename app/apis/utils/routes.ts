
export const authenticatedRoutes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
  },
];


export type Role = "Agent" | "Landlord" | "Home_Seeker";

export type Permission =
  | "VIEW_DASHBOARD"
  | "MANAGE_PROPERTIES"
  | "VIEW_PROFILE"
  | "MANAGE_USERS";

export type AppRoute = {
  path: string;
  title?:String;
  public?: boolean; // no auth required
  roles?: Role[]; // allowed roles
  permissions?: Permission[]; // advanced permission system
  defaultRedirect?: boolean; // role landing page
};

export const appRoutes: AppRoute[] = [
  /* ================= PUBLIC ================= */
  { 
    title: "Login",
    path: "/auth/login",
    public: true 
  },
  { 
    title: "Signup",
    path: "/auth/signup",
    public: true 
  },
  { 
    title: "Reset password",
    path: "/auth/reset-password", 
    public: true 
  },
  { 
    title: "Otp verfication",
    path: "/auth/otp-verification",
    public: true 
  },
  { 
    title: "Onboarding",
    path: "/onboarding", 
    public: true 
  },
  { 
    title: "Otp Email",
    path: "/auth/otp-email",
    public: true 
  },
  { 
    title: "forgotpassword",
    path: "/auth/forgotpassword",
    public: true 
  },
    { 
    title: "forgot password otp",
    path: "/auth/forgot-password-otp",
    public: true 
  },
  { 
    title: "Password recovery",
    path: "/auth/password-recovery",
    public: true 
  },
  { 
    title: "Email sent",
    path: "/auth/email-sent", 
    public: true 
  },

  /* ================= DEFAULT LANDING ================= */
  {
    path: "/property",
    title:"Property",
    roles: ["Home_Seeker"],
    defaultRedirect: true,
  },
  {
    title:"List your property",
    path: "/agent/private",
    roles: ["Agent"],
    defaultRedirect: true,
  },
  {
    path: "/landlord/dashboard",
    roles: ["Landlord"],
    defaultRedirect: true,
  },

  /* ================= ROLE BASED ================= */
  {
    path: "/agent",
    roles: ["Agent"],
    permissions: ["MANAGE_PROPERTIES"],
  },
  {
    path: "/landlord",
    roles: ["Landlord"],
  },
  {
    path: "/profile",
    roles: ["Agent", "Landlord", "Home_Seeker"],
    permissions: ["VIEW_PROFILE"],
  },
];


export function getDefaultRouteForRole(role: Role) {
  const route = appRoutes.find(
    (r) => r.roles?.includes(role) && r.defaultRedirect
  );

  return route?.path ?? "/";
}

export const rolePermissions: Record<Role, Permission[]> = {
  Agent: ["VIEW_DASHBOARD", "MANAGE_PROPERTIES", "VIEW_PROFILE"],
  Landlord: ["VIEW_DASHBOARD", "VIEW_PROFILE"],
  Home_Seeker: ["VIEW_DASHBOARD", "VIEW_PROFILE"],
};