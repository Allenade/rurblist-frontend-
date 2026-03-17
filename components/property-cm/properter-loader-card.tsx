"use client";

export function PropertySkeletonCard() {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-4 sm:p-5 lg:p-6
        shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]
        animate-pulse
      "
    >
      {/* Image */}
      <div className="relative w-full h-50 sm:h-60 lg:h-70 rounded-xl bg-gray-200 overflow-hidden" />

      {/* Content */}
      <div className="mt-5 sm:mt-6 lg:mt-7">
        {/* Title */}
        <div className="h-5 sm:h-6 w-3/4 bg-gray-200 rounded mb-3" />

        {/* Price */}
        <div className="flex items-center gap-2 mt-4">
          <div className="h-8 w-32 bg-gray-200 rounded" />
          <div className="h-4 w-12 bg-gray-200 rounded" />
        </div>

        {/* Meta */}
        <div className="mt-6 flex items-center gap-4">
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}