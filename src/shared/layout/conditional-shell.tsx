'use client';

import { useLayoutStore } from '@/shared/layout/layout-store';
import Navbar from '@/shared/layout/navbar';
import Footer from '@/shared/layout/footer/footer';
import { AuthProvider } from './auth-provider';
import AuthListener from '@/features/auth/components/auth-listener';
import { AgentProfileReminder } from './agent-profile-reminder';

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
        <AgentProfileReminder />
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
    </>
  );
}
