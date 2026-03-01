"use client"

interface PropertyDetailsProps {
  price: string
  location: string
}

export default function PropertyDetails({
  price,
  location,
}: PropertyDetailsProps) {
  return (
    <div className="w-full max-w-full lg:max-w-200">
      <div className="mb-8 sm:mb-10">
        {/* Status */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-green-600 mb-3">
          <span className="w-2 h-2 bg-green-600 rounded-full" />
          For sale
        </div>

        {/* Price */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
          {price}{" "}
          <span className="text-sm sm:text-base font-normal text-gray-500">
            yearly
          </span>
        </h1>

        {/* Location */}
        <p className="text-sm sm:text-base text-gray-600 mb-5 wrap-break-word">
          {location}
        </p>

        {/* Quick Meta */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base text-gray-600 mb-8">
          <span>2 bedroom</span>
          <span className="hidden sm:block w-px h-4 bg-gray-300" />
          <span>2 bath</span>
          <span className="hidden sm:block w-px h-4 bg-gray-300" />
          <span>100 sqft</span>
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
          <li>Property Type: Apartment</li>
          <li>Bedrooms: 2</li>
          <li>Bathrooms: 2</li>
          <li>Size: 100 sqm</li>
          <li>Furnished: Unfurnished</li>
          <li>Amenities: Swimming Pool, Gym, Security</li>
        </ul>
      </div>
    </div>
  )
}