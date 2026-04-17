'use client';

export default function CurrentListingsSectionSkeleton() {
  return (
    <section className="mt-10 bg-white border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 animate-pulse">
      <div className="flex flex-col items-start gap-4 mb-6">
        <div className="h-8 w-44 rounded bg-gray-200" />
        <div className="h-10 w-40 rounded bg-gray-200" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="w-full h-50 sm:h-60 lg:h-70 rounded-xl bg-gray-200" />
            <div className="mt-5 space-y-4">
              <div className="h-5 w-3/4 rounded bg-gray-200" />
              <div className="h-8 w-32 rounded bg-gray-200" />
              <div className="flex gap-4">
                <div className="h-4 w-20 rounded bg-gray-200" />
                <div className="h-4 w-20 rounded bg-gray-200" />
                <div className="h-4 w-20 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
