"use client";

interface AgentAboutProps {
  about: string;
}

export function AgentAbout({ about }: AgentAboutProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold  text-[#833700] font-[Georgia]">
        About Agent
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm">
        {about}
      </p>
    </div>
  );
}