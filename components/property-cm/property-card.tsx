"use client"

import Image from "next/image"
import { IconImage } from "../icon-image/icon-image"

interface PropertyCardProps {
  image: string
  title: string
  price: string
  badge?: string
  bedrooms: number
  bathrooms: number
  size: number
}

export default function PropertyCard({
  image,
  title,
  price,
  badge = "For rent",
  bedrooms,
  bathrooms,
  size,
}: PropertyCardProps) {
  return (
    <div
      className="
        group
        bg-white
        rounded-2xl
        p-4 sm:p-5 lg:p-6
        shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative w-full h-50 sm:h-60 lg:h-70 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Badge */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-[#FFDDC5] text-black text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm font-medium">
          {badge}
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 sm:mt-6 lg:mt-7">
        {/* Title */}
        <h3 className="text-base sm:text-lg lg:text-[20px] font-semibold text-[#9b4b17] leading-snug tracking-tight min-h-12">
          {title}
        </h3>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2 sm:gap-3 flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-black">
            {price}
          </span>
          <span className="text-sm sm:text-base text-gray-600 mb-1">
            yearly
          </span>
        </div>

        {/* Meta */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-y-3 gap-x-4 text-xs sm:text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <IconImage
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#e87722]"
              src="/icons/mdi_bedroom-outline.svg"
              alt="bedroom"
            />
            <span>{bedrooms} bedroom</span>
          </div>

          <div className="hidden sm:block h-4 w-px bg-gray-300" />

          <div className="flex items-center gap-2">
            <IconImage
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#e87722]"
              src="/icons/Group.svg"
              alt="bathroom"
            />
            <span>{bathrooms} bath</span>
          </div>

          <div className="hidden sm:block h-4 w-px bg-gray-300" />

          <div className="flex items-center gap-2">
            <IconImage
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#e87722]"
              src="/icons/tdesign_measurement-2.svg"
              alt="size"
            />
            <span>{size} sqft</span>
          </div>
        </div>
      </div>
    </div>
  )
}