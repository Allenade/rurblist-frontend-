"use client";

import { useLayoutStore } from "@/store/layout-store";
import Navbar from "@/components/pages/navbar";
import Footer from "@/components/footer/footer";

export function ConditionalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const hideNavbar = useLayoutStore((state) => state.hideNavbar);

  if (hideNavbar) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
