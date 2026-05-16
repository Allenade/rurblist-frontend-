'use client';

import { useState } from 'react';
import Image from 'next/image';
import { OrangeButton } from '@/components/button/button';
import { RoleCard } from '@/components/role-card/role-card';
import { useSignup } from '@/features/auth/hooks/use-signup';
import { useSignupStore } from '@/features/auth/store/auth-store';
import type { Role } from '@/shared/config/routes';

type OnboardingRole = {
  id: Role;
  title: string;
  description: string;
  icon: string;
  variant: 'secondary';
  h: number;
  w: number;
};

const onboardingRoles: OnboardingRole[] = [
  {
    id: 'Home_Seeker',
    title: 'Home Seeker',
    description: 'Find your next home from verified listings',
    icon: '/house_keeper.png',
    variant: 'secondary',
    h: 157,
    w: 197,
  },
  {
    id: 'Agent',
    title: 'Agent',
    description: 'Manage listings and connect with buyers',
    icon: '/agent.png',
    variant: 'secondary',
    h: 157.25,
    w: 142,
  },
  {
    id: 'Landlord',
    title: 'Property Developer',
    description: 'List your property and connect with Buyers',
    icon: '/develoer.png',
    variant: 'secondary',
    h: 157.25,
    w: 249.30419921875,
  },
];

export default function OnboardingPage() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const signupData = useSignupStore((s) => s.data);

  const { mutate, isPending } = useSignup();

  function handleContinue() {
    if (!selectedRole) {
      return;
    }

    if (!signupData) {
      return;
    }

    const payload = {
      ...signupData,
      role: selectedRole,
    };

    mutate(payload);
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="p-6">
        <div className="flex items-center gap-1">
          <Image src="/Rublist_logo.png" width={50} height={63} alt="Rurblist" />
        </div>
      </header>

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
          {onboardingRoles.map((role) => (
            <RoleCard
              key={role.id}
              title={role.title}
              description={role.description}
              icon={role.icon}
              variant={role.variant}
              imageW={role.w}
              imageH={role.h}
              selected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <OrangeButton
            onClick={handleContinue}
            disabled={!selectedRole || isPending}
            variant={!selectedRole || isPending ? 'gray' : 'orange'}
            className=" w-125 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'Creating account...' : 'Continue'}
          </OrangeButton>
        </div>
      </div>
    </main>
  );
}
