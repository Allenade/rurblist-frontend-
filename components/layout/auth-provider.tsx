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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useGetCurrentUser();
  const user = data?.statusCode === 401 ? null : (data?.data ?? null);

  return (
    <AuthContext.Provider
      value={{
        user: user,
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
