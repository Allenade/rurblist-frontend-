"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { OrangeButton } from "@/components/button/button"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Browse Properties", href: "/property" },
    { name: "List your property", href: "/list" },
    { name: "Property Advisory", href: "/property-advisory" },
  ]

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Height maintained */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Rublist.svg"
                alt="Rublist Logo"
                width={34}
                height={34}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
  {navItems.map((item) => {
    const active = pathname === item.href

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`
          text-[15px] font-medium
          transition-all duration-200
          transform
          ${
            active
              ? "text-[#e87722] scale-105"
              : "text-gray-600 hover:text-[#e87722] hover:scale-105"
          }
        `}
      >
        {item.name}
      </Link>
    )
  })}
</nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/auth/signup">
                <OrangeButton className="px-5 py-2 text-sm">
                  Sign up
                </OrangeButton>
              </Link>

              <Link href="/auth/login">
                <OrangeButton
                  variant="white"
                  className="px-5 py-2 text-sm border border-[#e87722] text-[#e87722]"
                >
                  Log in
                </OrangeButton>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              aria-label="Open menu"
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
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`absolute top-0 left-0 h-full w-70 bg-white shadow-xl border-r border-gray-200 transform transition-transform duration-300 ${
            mobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full px-6 pt-6">
            {/* Close */}
            <div className="flex justify-end mb-8">
              <button
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

            {/* Links */}
           <nav className="flex flex-col gap-6">
  {navItems.map((item) => {
    const active = pathname === item.href

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setMobileMenuOpen(false)}
        className={`
          text-[16px] font-medium
          transition-all duration-200
          transform
          ${
            active
              ? "text-[#e87722] scale-105"
              : "text-gray-700 hover:text-[#e87722] hover:scale-105"
          }
        `}
      >
        {item.name}
      </Link>
    )
  })}
</nav>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4">
              <Link
                href="/auth/signup"
                onClick={() => setMobileMenuOpen(false)}
              >
                <OrangeButton fullWidth>
                  Sign up
                </OrangeButton>
              </Link>

              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
              >
                <OrangeButton
                  variant="white"
                  fullWidth
                  className="border border-[#e87722] text-[#e87722]"
                >
                  Log in
                </OrangeButton>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}