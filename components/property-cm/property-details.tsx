"use client"

import { IconImage } from "../icon-image/icon-image"

interface PropertyDetailsProps {
  price: number
  location: string
  status: "For_Rent" | "For_Sale" | "Sold";
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string
}

export default function PropertyDetails({
  price,
  location,
  status,
  sqft,
  bathrooms,
  bedrooms,
  type
}: PropertyDetailsProps) {
  return (
    <div className="w-full max-w-full lg:max-w-200">
      <div className="mb-8 sm:mb-10">
        {/* Status */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-green-600 mb-3">
          <span className="w-2 h-2 bg-green-600 rounded-full" />
          {status === "For_Rent" ? "For rent" : "For sale"}
        </div>

        {/* Price */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
           ₦{price.toLocaleString()}
            {status === "For_Rent" && (
          <span className="text-sm sm:text-base font-normal text-gray-500">
            yearly
          </span>
            )}
        </h1>

        {/* Location */}
        <p className="text-sm sm:text-base text-gray-600 mb-5 wrap-break-word">
          {location}
        </p>

        {/* Quick Meta */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base text-gray-600 mb-8">
           
          <span className="flex items-center gap-1"><IconImage
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        
                        src="/icons/mdi_bedroom-outline (1).svg"
                        alt="bedroom"
                      />{bedrooms} bedroom</span>
          <span className="hidden sm:block w-px h-4 bg-gray-300" />
          <span className="flex items-center gap-1"><IconImage
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        
                        src="/icons/mingcute_bath-line.svg"
                        alt="bedroom"
                      /> {bathrooms} bath</span>
          <span className="hidden sm:block w-px h-4 bg-gray-300" />
          <span className="flex items-center gap-1"><IconImage
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        
                        src="/icons/tdesign_measurement-2 (1).svg"
                        alt="bedroom"
                      /> {sqft} sqft</span>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* About */}
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-[#e87722] mb-3">
          About
        </h2>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 max-w-[65ch]">
          This modern 2-bedroom apartment is located in the
          heart of Ikeja, offering convenience and comfort for
          urban living. Featuring spacious bedrooms, a fully
          equipped kitchen, and a balcony with panoramic views,
          this apartment is perfect for professionals or small
          families. Enjoy access to on-site amenities including
          a swimming pool, gym, and 24/7 security.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* Features */}
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-[#e87722] mb-4">
          Property features
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm sm:text-base text-gray-600 list-disc pl-5">
          <li>Property Type: {type}</li>
          <li>Bedrooms: {bedrooms}</li>
          <li>Bathrooms: {bathrooms}</li>
          <li>Size: {sqft} sqm</li>
          <li>Furnished: Unfurnished</li>
          <li>Amenities: Swimming Pool, Gym, Security</li>
        </ul>
      </div>
    </div>
  )
}