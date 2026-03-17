"use client";

import { PropertySkeletonCard } from "./properter-loader-card";



export default function PropertySkeletonGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        sm:gap-7
        lg:gap-8
        mt-15
      "
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <PropertySkeletonCard key={index} />
      ))}
    </div>
  );
}