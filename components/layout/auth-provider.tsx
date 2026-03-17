// components/auth-provider.tsx
"use client";

import { UserModel } from "@/app/apis/models/user-model";
import { useGetCurrentUser } from "@/app/apis/mutations/use-user/use-get-current-user";
import { createContext, useContext } from "react";


type AuthContextType = {
  user: UserModel | null;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useGetCurrentUser();
  
  return (
    <AuthContext.Provider
      value={{
        user: data?.data ?? null,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}