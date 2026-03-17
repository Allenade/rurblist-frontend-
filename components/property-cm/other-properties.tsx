"use client"

import toast from "react-hot-toast"
import PropertyCard from "./property-card"
import PropertySkeletonGrid from "./property-loder-grid"
import { useGetAgentPropertiesById } from "@/app/apis/mutations/use-property/use-get-agents-propeties-byId"

export interface PropertyCardDetails {
  id: string
  image: string
  title: string
  price: number
  bedrooms: number
  bathrooms: number
  size: number
  status?: string
}

interface OtherPropertiesProps {
  agentName: string
  id: string
}

export default function OtherProperties({
  agentName,
  id
}: OtherPropertiesProps) {
  const properties1: PropertyCardDetails[] = [
    {
      id: "1",
      image: "/image/image1.jpg",
      title: "Modern 2-Bedroom Apartment in Prime Location",
      price: 3000000,
      bedrooms: 2,
      bathrooms: 2,
      size: 800,
      status: "For_Rent",
    },
    {
      id: "2",
      image: "/image/image2.jpg",
      title: "Luxury 3-Bedroom Duplex with Balcony",
      price: 4500000,
      bedrooms: 3,
      bathrooms: 3,
      size: 1200,
      status: "For_Rent",
    },
    {
      id: "3",
      image: "/image/image3.jpg",
      title: "Contemporary Apartment Near City Center",
      price: 2800000,
      bedrooms: 2,
      bathrooms: 2,
      size: 750,
      status: "For_Rent",
    },
    {
      id: "4",
      image: "/image/image4.jpg",
      title: "Modern Studio Apartment",
      price: 1800000,
      bedrooms: 1,
      bathrooms: 1,
      size: 500,
      status: "For_Rent",
    },
  ]
  const { data, error, isLoading } = useGetAgentPropertiesById(id);
   const properties = data?.data??[];
  
    if (isLoading) {
      return <PropertySkeletonGrid />;
    }
    if (error) {
    toast.error((error as Error).message);
   }
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
              key={property._id}
              id={property._id}
              image={property.images[0].url}
              title={property.title}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              sqft={property.size}
              status={property.status as "For_Rent" | "For_Sale" | "Sold"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}