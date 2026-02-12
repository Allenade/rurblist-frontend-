"use client"

import { useState } from "react"
import { RoleCard } from "@/components/role-card/role-card"
import Image from "next/image";

const roles = [
  {
    id: "home-seeker",
    title: "Home Seeker",
    description: "Find your next home from verified listings",
    icon: "/house_keeper.png",
    variant: "secondary" as const,
    h:157,
    w:197
  },
  {
    id: "agent",
    title: "Agent",
    description: "Manage listings and connect with buyers",
    icon: "/agent.png",
    variant: "secondary" as const,
     h:157.25,
    w:142
  },
  {
    id: "developer",
    title: "Property Developer",
    description: "List your property and connect with Buyers",
    icon: "/develoer.png",
    variant: "secondary" as const,
     h:157.25,
    w:249.30419921875
  },
]

export default function OnboardingPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-white">
      {/* Header with logo */}
      <header className="p-6">
        <div className="flex items-center gap-1">
            <Image src="/Rublist_logo.png"  width={50} height={63} alt={"key"}></Image>
          </div>
      </header>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-[48px] font-serif Georgia font-bold text-[#555555] mb-3">
            Choose your role
          </h1>
          <p className="text-[#808080]">
            Are you looking for a new home, or would you like to list properties?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              title={role.title}
              description={role.description}
              icon={role.icon}
              variant={role.variant}
              imageW={role.w}
              url="/kyc"
              imageH={role.h}
              selected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
