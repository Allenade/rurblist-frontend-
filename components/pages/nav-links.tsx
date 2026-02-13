"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
  onClick?: () => void;
  /** Extra class when this link is active (e.g. mobile: "bg-brand-400 px-3 py-2 rounded-md") */
  activeClassName?: string;
};

export function NavLink({
  href,
  children,
  exact = false,
  onClick,
  activeClassName,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");
  const colorClass =
    isActive && activeClassName ? activeClassName : "text-foreground";
  const linkClass = `${colorClass} hover:text-primary transition-colors hover:font-semibold ${
    isActive ? "font-bold text-base" : "font-normal"
  }`.trim();
  return (
    <Link
      href={href}
      className={linkClass}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
