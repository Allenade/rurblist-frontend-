'use client';

interface AgentAboutProps {
  about: string;
}

export function AgentAbout({ about }: AgentAboutProps) {
  return (
    <div className="min-w-0 space-y-3">
      <h3 className="text-xl font-semibold  text-[#833700] font-[Georgia]">About Agent</h3>

      <p className="whitespace-pre-wrap wrap-break-word text-sm leading-relaxed text-gray-600">
        {about}
      </p>
    </div>
  );
}
