'use client';

import { Footer, useLayoutStore } from '@/shared/layout';
import Navbar from './navbar';
import { AuthProvider } from './auth-provider';
import { AuthListener } from '@/features/auth/components';
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
