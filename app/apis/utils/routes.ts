export type Role = "Agent" | "Landlord" | "Home_Seeker" | "Admin";

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
  showInNaBar?:boolean;
};

export const appRoutes: AppRoute[] = [
  /* ================= PUBLIC ================= */
  { 
    title: "Login",
    path: "/login",
    public: true 
  },
  { 
    title: "Signup",
    path: "/signup",
    public: true 
  },
  { 
    title: "Reset password",
    path: "/reset-password", 
    public: true 
  },
  { 
    title: "Otp verfication",
    path: "/otp-verification",
    public: true 
  },
  { 
    title: "Onboarding",
    path: "/onboarding", 
    public: true 
  },
  { 
    title: "Otp Email",
    path: "/otp-email",
    public: true 
  },
  { 
    title: "forgotpassword",
    path: "/forgotpassword",
    public: true 
  },
  { 
    title: "Oauth successpage",
    path: "/oAuth-success-page",
    public: true 
  },
    { 
    title: "forgot password otp",
    path: "/forgot-password-otp",
    public: true 
  },
  { 
    title: "Password recovery",
    path: "/password-recovery",
    public: true 
  },
  { 
    title: "Email sent",
    path: "/email-sent", 
    public: true 
  },

  /* ================= DEFAULT LANDING ================= */
    {
    path: "/",
    title:"Home",
    showInNaBar:true,
    roles: ["Agent","Home_Seeker","Landlord","Admin"],
    permissions: ["MANAGE_PROPERTIES"],
  },
  {
    path: "/property",
    title:"Property",
    roles: ["Home_Seeker", "Agent","Landlord","Admin"],
    defaultRedirect: true,
    showInNaBar:true
  },
  {
    title:"List your property",
    path: "/list-properties",
    roles: ["Agent","Admin","Landlord"],
    defaultRedirect: true,
    showInNaBar:true
  },
   {
    title:"Add new Property",
    path: "/agent/add-property",
    roles: ["Agent","Admin","Landlord"],
  },
  {
    path: "/landlord/dashboard",
    roles: ["Landlord"],
    defaultRedirect: true,
  },

  /* ================= ROLE BASED ================= */

  {
    path: "/property-advisory",
    roles: ["Agent","Admin","Landlord"],
    title: "Property Advisory",
    showInNaBar:true,
    permissions: ["MANAGE_PROPERTIES"],
  },
   {
    path: "/agent/agreement",
    roles: ["Agent","Admin","Landlord"],
    title: "Agent Agreement",
    permissions: ["MANAGE_PROPERTIES"],
  },
   {
    path: "/agent/private",
    roles: ["Agent","Admin","Landlord"],
    title: "Agent Private",
    permissions: ["MANAGE_PROPERTIES"],
  },

  {
    path: "/agent/profile",
    roles: ["Agent","Admin","Landlord","Home_Seeker"],
    title: "Agent Private",
    permissions: ["MANAGE_PROPERTIES"],
  },

  {
    path: "/agent/request",
    roles: ["Agent","Admin","Landlord","Home_Seeker"],
    title: "Agent Private",
    permissions: ["MANAGE_PROPERTIES"],
  },
  {
    path: "/house-seeker/profile",
    roles: ["Agent","Admin","Landlord","Home_Seeker"],
    title: "House Seeker Profile",
    permissions: ["MANAGE_PROPERTIES"],
  },
  {
    path: "/kyc/add-property",
    roles: ["Agent","Admin","Landlord"],
    title: "Add Property",
    permissions: ["MANAGE_PROPERTIES"],
  },
  {
    path: "/kyc/add-property-details",
    roles: ["Agent","Admin","Landlord"],
    title: "Add Property Details",
    permissions: ["MANAGE_PROPERTIES"],
  },
   {
    path: "/kyc",
    roles: ["Agent","Admin","Landlord"],
    title: "Kyc",
    permissions: ["MANAGE_PROPERTIES"],
  },
   {
    path: "/payment",
    roles: ["Agent","Admin","Landlord","Home_Seeker"],
    title: "Payment",
    permissions: ["MANAGE_PROPERTIES"],
  },
   {
    path: "/payment/success",
    roles: ["Agent","Admin","Landlord","Home_Seeker"],
    title: "Payent success",
    permissions: ["MANAGE_PROPERTIES"],
  },
   {
    path: "/payment/complete",
    roles: ["Agent","Admin","Landlord","Home_Seeker"],
    title: "Payment complete",
    permissions: ["MANAGE_PROPERTIES"],
  },
   {
    path: "/property/",
    roles: ["Agent","Admin","Landlord","Home_Seeker"],
    title: "Property details",
    permissions: ["MANAGE_PROPERTIES"],
  },
   {
    path: "/property/escrow",
    roles: ["Home_Seeker"],
    title: "Property Escrow",
    permissions: ["MANAGE_PROPERTIES"],
  },

  {
    path: "/verification",
    roles: ["Home_Seeker","Agent"],
    title: "verification",
    permissions: ["MANAGE_PROPERTIES"],
  },
  {
    path: "/profile",
    roles: ["Agent", "Landlord", "Home_Seeker"],
    permissions: ["VIEW_PROFILE"],
  },
  {
  path: "/admin",
  roles: ["Admin"],
  permissions: ["MANAGE_USERS"]
}
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
  Admin:[]
};

