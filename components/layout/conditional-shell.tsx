'use client';

import { useLayoutStore } from '@/store/layout-store';
import Navbar from '@/components/pages/navbar';
import Footer from '@/components/footer/footer';
import { AuthProvider } from './auth-provider';
import AuthListener from '@/app/auth-listener';

export function ConditionalShell({ children }: { children: React.ReactNode }) {
  const hideNavbar = useLayoutStore((state) => state.hideNavbar);

  if (hideNavbar) {
    return (
      <>
        {children}
        <Footer />
      </>
    );
  }

  return (
    <>
      <AuthProvider>
        <AuthListener />
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
    </>
  );
}
