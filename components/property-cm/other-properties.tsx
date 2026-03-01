"use client"

import PropertyCard from "./property-card"

export interface PropertyCardDetails {
  id: string
  image: string
  title: string
  price: string
  bedrooms: number
  bathrooms: number
  size: number
  badge?: string
}

interface OtherPropertiesProps {
  agentName: string
}

export default function OtherProperties({
  agentName,
}: OtherPropertiesProps) {
  const properties: PropertyCardDetails[] = [
    {
      id: "1",
      image: "/image/image1.jpg",
      title: "Modern 2-Bedroom Apartment in Prime Location",
      price: "₦3,000,000",
      bedrooms: 2,
      bathrooms: 2,
      size: 800,
      badge: "For rent",
    },
    {
      id: "2",
      image: "/image/image2.jpg",
      title: "Luxury 3-Bedroom Duplex with Balcony",
      price: "₦4,500,000",
      bedrooms: 3,
      bathrooms: 3,
      size: 1200,
      badge: "For rent",
    },
    {
      id: "3",
      image: "/image/image3.jpg",
      title: "Contemporary Apartment Near City Center",
      price: "₦2,800,000",
      bedrooms: 2,
      bathrooms: 2,
      size: 750,
      badge: "For rent",
    },
    {
      id: "4",
      image: "/image/image4.jpg",
      title: "Modern Studio Apartment",
      price: "₦1,800,000",
      bedrooms: 1,
      bathrooms: 1,
      size: 500,
      badge: "For rent",
    },
  ]

  return (
    <section className="w-full py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#e87722] mb-8 sm:mb-10">
          Other properties from {agentName}
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-3
            gap-6
            sm:gap-8
            lg:gap-10
          "
        >
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              size={property.size}
              badge={property.badge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}