// components/auth-provider.tsx
'use client';

import { currentUserModel } from '@/app/apis/models/user-model';
import { useGetCurrentUser } from '@/app/apis/mutations/use-user/use-get-current-user';
import { createContext, useContext } from 'react';

type AuthContextType = {
  user: currentUserModel | null;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
});

type AuthProviderProps = {
  children: React.ReactNode;
  shouldFetchUser?: boolean;
};
export function AuthProvider({ children, shouldFetchUser = true }: AuthProviderProps) {
  const { data, isLoading } = useGetCurrentUser({
    enabled: shouldFetchUser,
  });

  return (
    <AuthContext.Provider
      value={{
        user: data?.data ?? null,
        isLoading: shouldFetchUser ? isLoading : false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
