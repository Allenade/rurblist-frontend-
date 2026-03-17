"use client";

import Image from "next/image";

interface AgentProfileCardProps {
  name: string;
  agency: string;
  experience: string;
  location: string;
  image: string;
}

export function AgentProfileCard({
  name,
  agency,
  experience,
  location,
  image,
}: AgentProfileCardProps) {
  return (
    <div className="flex items-center gap-4 sm:gap-6 border border-[#DEDEDE] rounded-xl p-4 sm:p-6 bg-white">
      
      {/* Agent Image */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-27.5 md:h-27.5 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Agent Info */}
      <div className="flex flex-col justify-center space-y-1">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
          {name}
        </h3>

        <p className="text-gray-600 text-sm sm:text-base">
          {agency}
        </p>

        <p className="text-gray-600 text-sm sm:text-base">
          {experience}
        </p>

        <p className="text-gray-500 text-xs sm:text-sm">
          Area of operation: {location}
        </p>
      </div>
    </div>
  );
}