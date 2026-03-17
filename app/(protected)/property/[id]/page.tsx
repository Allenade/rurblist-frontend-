"use client"
import { useGetPropertyById } from "@/app/apis/mutations/use-property/use-get-property-by-id"
import AdvancedHeroGallery, {
  GalleryImage,
} from "@/components/property-cm/advanced-hero-gallery"
import ContactCard from "@/components/property-cm/contact-card"
import OtherProperties from "@/components/property-cm/other-properties"
import PropertyDetails from "@/components/property-cm/property-details"
import PropertySkeletonGrid from "@/components/property-cm/property-loder-grid"
import PropertyMap from "@/components/property-cm/property-map"
import { useParams } from "next/navigation"
import toast from "react-hot-toast"

// const images: GalleryImage[] = [
//   { id: "1", src: "/image/image1.jpg", alt: "Building" },
//   { id: "2", src: "/image/image2.jpg", alt: "Room 1" },
//   { id: "3", src: "/image/image3.jpg", alt: "Room 2" },
//   { id: "4", src: "/image/image4.jpg", alt: "Room 3" },
//   { id: "5", src: "/image/image5.jpg", alt: "Room 4" },
//   { id: "6", src: "/image/image6.jpg", alt: "Room 5" },
// ]

export default function PropertyDetail() {
   const params = useParams();
  const id = params.id as string;

  const { data, error, isLoading } = useGetPropertyById(id);
   const property = data?.data;
  
    if (isLoading) {
      return <PropertySkeletonGrid />;
    }
    if (error) {
    toast.error((error as Error).message);
   }
    /* ================= MAP API IMAGES ================= */

  const images: GalleryImage[] =
    property?.images?.map((img, index) => ({
      id: img._id,
      src: img.url,
      alt: property.title,
    })) ?? []
  return (
    <div className="mt-17">
      <AdvancedHeroGallery
        images={images}
        autoPlay
        autoPlayInterval={4000}
      />
         {/* CONTENT SECTION */}
      <div className="max-w-350 mx-auto px-3 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
         {/* LEFT — Larger */}
          <div className="lg:col-span-8">
            <PropertyDetails
              price={property?.price ?? 0}
              status={property?.status as "For_Rent" | "For_Sale" | "Sold"}
              location={property?.location.address ?? ""} 
              bedrooms={property?.bedrooms??0} 
              bathrooms={property?.bathrooms??0} 
              sqft={property?.size??0}  
              type={property?.type??""}          />
          </div>

     
         {/* RIGHT — Smaller */}
          <div className="lg:col-span-4">
            <ContactCard
            agentImage={property?.owner.profileImage.url??"/image/profile-image2.jpg"}
              agentName={property?.owner.fullName?? "June Austen"}
              agency={property?.owner.role?? "ABX real estate agency"}
              phone={`${property?.owner.phoneNumber?? "+234 902 002 000"}`}
            />
          </div>
        </div>
      </div>
      <PropertyMap 
        address={property?.location.address}
        latitude={property?.location.coordinates.coordinates[1]}
        longitude={property?.location.coordinates.coordinates[0]}  
        height="h-[400px]" 
      />
      <OtherProperties 
          agentName={property?.owner.fullName??''}
          id={property?.owner._id??""}
        />
    </div>
  )
}