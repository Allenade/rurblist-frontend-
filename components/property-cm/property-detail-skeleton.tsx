"use client";

export default function PropertyDetailSkeleton() {
  return (
    <div className="mt-17 animate-pulse">
      <div className="w-full h-[26rem] bg-gray-200" />

      <div className="max-w-350 mx-auto px-3 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-6 w-28 rounded-full bg-gray-200" />
              <div className="h-6 w-24 rounded-full bg-gray-200" />
            </div>
            <div className="h-12 w-56 rounded bg-gray-200" />
            <div className="h-5 w-3/4 rounded bg-gray-200" />
            <div className="flex flex-wrap gap-4">
              <div className="h-5 w-24 rounded bg-gray-200" />
              <div className="h-5 w-24 rounded bg-gray-200" />
              <div className="h-5 w-24 rounded bg-gray-200" />
            </div>
            <div className="h-px w-full bg-gray-200" />
            <div className="h-6 w-28 rounded bg-gray-200" />
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-11/12 rounded bg-gray-200" />
              <div className="h-4 w-5/6 rounded bg-gray-200" />
            </div>
            <div className="h-px w-full bg-gray-200" />
            <div className="h-6 w-36 rounded bg-gray-200" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-4 w-full rounded bg-gray-200" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-gray-200 p-6 space-y-4">
              <div className="h-16 w-16 rounded-full bg-gray-200" />
              <div className="h-5 w-32 rounded bg-gray-200" />
              <div className="h-4 w-28 rounded bg-gray-200" />
              <div className="h-10 w-full rounded bg-gray-200" />
              <div className="h-10 w-full rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-3">
        <div className="h-[400px] rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
}
