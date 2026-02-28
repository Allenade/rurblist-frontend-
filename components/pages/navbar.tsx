"use client";

import NextImage from "next/image";
import Link from "next/link";
import { NavLink } from "./nav-links";
import { useState } from "react";
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-primary-foreground border-b border-border fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NextImage
              src="/Rublist.svg"
              alt="Rublist Logo"
              width={30}
              height={30}
            />
          </div>

          {/* Desktop nav -  hidden on mobile  */}
          {/* navbar first */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-8"
          >
            <ul className="flex items-center gap-8">
              <li>
                <NavLink href="/" activeClassName="text-brand-400">Home</NavLink>
              </li>
              <li>
                <NavLink href="/property" activeClassName="text-brand-400">Browse Properties</NavLink>
              </li>
              <li>
                <NavLink href="/list" activeClassName="text-brand-400">List your property</NavLink>
              </li>
              <li>
                <NavLink href="/property-advisory" activeClassName="text-brand-400">Property Advisory</NavLink>
              </li>
            </ul>
          </nav>

          {/* navbar second */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/auth/login"
              className="inline-block bg-brand-400 border rounded-md px-4 py-2 text-foreground hover:text-primary hover:border-primary transition-colors"
            >
              Sign up
            </Link>
            <Link
              href="/auth/signup"
              className="inline-block border border-brand-400 rounded-lg px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Log in
            </Link>
          </div>

          {/* mobile nav - hidden on desktop */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Overlay: dimmed background when menu is open */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      >
        <aside
          className={`fixed top-0 left-0 h-full w-[min(280px,85vw)] bg-primary-foreground border-r border-border z-[70] shadow-xl transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          aria-label="Mobile menu"
          aria-hidden={!mobileMenuOpen}
        >
          <div className="flex flex-col h-full pt-6 px-4">
            <div className="flex justify-end mb-6">
              <button
                type="button"
                className="p-2 rounded-md text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col pt-8 gap-6"
            >
              <NavLink
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                activeClassName="text-brand-400"
              >
                Home
              </NavLink>
              <NavLink
                href="/property"
                onClick={() => setMobileMenuOpen(false)}
                activeClassName="text-brand-400"
              >
                Browse Properties
              </NavLink>
              <NavLink
                href="/list"
                onClick={() => setMobileMenuOpen(false)}
                activeClassName="text-brand-400"
              >
                List your property
              </NavLink>
              <NavLink
                href="/property-advisory"
                onClick={() => setMobileMenuOpen(false)}
                activeClassName="text-brand-400"
              >
                Property Advisory
              </NavLink>
            </nav>
            <div className="flex mt-8 items-center flex-col gap-4">
              <Link
                href="/auth/login"
                className="block text-center bg-brand-400 border rounded-md w-full px-4 py-3 text-foreground hover:bg-brand-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign up
              </Link>
              <Link
                href="/auth/signup"
                className="block text-center border border-brand-600 rounded-lg w-full px-4 py-3 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Navbar;
