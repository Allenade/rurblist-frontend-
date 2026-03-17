"use client"

import Image from "next/image"
import { IconImage } from "../icon-image/icon-image"
import { useRouter } from "next/navigation";

interface PropertyCardProps {
  id?: string;
  title: string;
  price: number;
  status: "For_Rent" | "For_Sale" | "Sold";
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  showControls?: boolean
  onEdit?: (id?: string) => void
  onDelete?: (id?: string) => void
}

export default function PropertyCard({
  id,
  image,
  title,
  price,
  status ,
  bedrooms,
  bathrooms,
  sqft,
  showControls = false,
  onEdit,
  onDelete,
}: PropertyCardProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/property/${id}`)}
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
        cursor-pointer
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
          {status === "For_Rent" ? "For rent" : "For sale"}
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
            ₦{price.toLocaleString()}
          </span>
           {status === "For_Rent" && (
          <span className="text-sm sm:text-base text-gray-600 mb-1">
            yearly
          </span>
           )}
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
            <span>{sqft} sqft</span>
          </div>
        </div>
         {/* Controls */}
        {showControls && (
          <div
            className="flex items-center gap-5 mt-5 text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onEdit?.(id)}
              className="flex items-center gap-2 text-gray-700 hover:text-black"
            >
              <IconImage
                src="/icons/edit-2.svg"
                alt="edit"
                width={16}
                height={16}
              />
              Edit
            </button>

            <button
              onClick={() => onDelete?.(id)}
              className="flex items-center gap-2 text-red-600 hover:text-red-700"
            >
              <IconImage
                src="/icons/trash-2.svg"
                alt="delete"
                width={16}
                height={16}
              />
              Delete
            </button>
          </div>
        )}
      </div>
      

    </div>
  )
}