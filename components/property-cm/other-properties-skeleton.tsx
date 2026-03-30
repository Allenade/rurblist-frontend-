"use client";

import PropertySkeletonGrid from "./property-loder-grid";

export default function OtherPropertiesSkeleton() {
  return (
    <section className="w-full py-16 animate-pulse">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-64 rounded bg-gray-200 mb-8 sm:mb-10" />
        <PropertySkeletonGrid />
      </div>
    </section>
  );
}
