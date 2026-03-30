'use client';

export default function PropertiesPageSkeleton() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <div className="bg-white px-6 py-4 border-b border-gray-200 pt-18">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 flex-wrap">
            <div className="h-11 w-full md:w-96 rounded-lg bg-gray-200" />
            <div className="h-11 w-32 rounded-lg bg-gray-200" />
            <div className="h-11 w-32 rounded-lg bg-gray-200" />
            <div className="h-11 w-32 rounded-lg bg-gray-200" />
            <div className="h-11 w-32 rounded-lg bg-gray-200" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div className="overflow-hidden rounded-2xl bg-gray-100">
          <div className="grid md:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 space-y-4">
              <div className="h-4 w-28 rounded bg-gray-200" />
              <div className="h-10 w-2/3 rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-5/6 rounded bg-gray-200" />
              <div className="h-11 w-40 rounded bg-gray-200" />
            </div>
            <div className="min-h-56 bg-gray-200" />
          </div>
        </div>

        <div className="space-y-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-6">
              <div className="h-8 w-2/3 rounded bg-gray-200" />
              <div className="h-104 w-full rounded bg-gray-200" />

              <div className="hidden sm:flex gap-5">
                {Array.from({ length: 4 }).map((_, imageIndex) => (
                  <div key={imageIndex} className="h-24 w-40 rounded bg-gray-200" />
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-4">
                  <div className="h-4 w-full rounded bg-gray-200" />
                  <div className="h-4 w-11/12 rounded bg-gray-200" />
                  <div className="h-4 w-4/5 rounded bg-gray-200" />
                  <div className="h-4 w-40 rounded bg-gray-200" />
                  <div className="h-8 w-32 rounded bg-gray-200" />
                  <div className="flex gap-4">
                    <div className="h-5 w-16 rounded bg-gray-200" />
                    <div className="h-5 w-16 rounded bg-gray-200" />
                    <div className="h-5 w-16 rounded bg-gray-200" />
                  </div>
                </div>

                <div className="hidden md:block space-y-4">
                  <div className="h-14 w-14 rounded-full bg-gray-200" />
                  <div className="h-4 w-28 rounded bg-gray-200" />
                  <div className="h-4 w-24 rounded bg-gray-200" />
                  <div className="h-10 w-24 rounded bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
