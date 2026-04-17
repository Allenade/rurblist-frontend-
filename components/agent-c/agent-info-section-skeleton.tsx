'use client';

export default function AgentInfoSectionSkeleton() {
  return (
    <section className="w-full bg-white rounded-xl border border-[#D6D6D6] p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 animate-pulse">
      <div className="h-8 w-52 rounded bg-gray-200" />
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        <div className="h-24 w-24 rounded-full bg-gray-200" />
        <div className="space-y-3 flex-1">
          <div className="h-6 w-48 rounded bg-gray-200" />
          <div className="h-4 w-40 rounded bg-gray-200" />
          <div className="h-4 w-36 rounded bg-gray-200" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div className="space-y-4">
          <div className="h-5 w-28 rounded bg-gray-200" />
          <div className="h-4 w-40 rounded bg-gray-200" />
          <div className="h-4 w-52 rounded bg-gray-200" />
        </div>
        <div className="space-y-4">
          <div className="h-5 w-24 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-11/12 rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
