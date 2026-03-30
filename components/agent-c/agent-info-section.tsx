"use client";

import { AgentProfileCard } from "./agent-profile-card";
import { AgentContactInfo } from "./agent-contact-info";
import { AgentAbout } from "./agent-about";

interface AgentInfoSectionProps {
  agent: {
    name: string;
    agency: string;
    experience: string;
    location: string;
    image: string;
    phone: string;
    email: string;
    about: string;
  };
  isCreateAgent?: boolean;
  onActionClick?: () => void;
}

export function AgentInfoSection({
  agent,
  isCreateAgent = false,
  onActionClick,
}: AgentInfoSectionProps) {
  return (
    <section className="w-full bg-white rounded-xl border border-[#D6D6D6] p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-[#833700] font-[Georgia]">
        Agent Info Section
      </h2>

      <AgentProfileCard
        name={agent.name}
        agency={agent.agency}
        experience={agent.experience}
        location={agent.location}
        image={agent.image}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <AgentContactInfo
          phone={agent.phone}
          email={agent.email}
          isCreateAgent={isCreateAgent}
          onActionClick={onActionClick}
        />
        <AgentAbout about={agent.about} />
      </div>
    </section>
  );
}
