import AdvancedHeroGallery, {
  GalleryImage,
} from "@/components/property-cm/advanced-hero-gallery"
import ContactCard from "@/components/property-cm/contact-card"
import OtherProperties from "@/components/property-cm/other-properties"
import PropertyDetails from "@/components/property-cm/property-details"
import PropertyMap from "@/components/property-cm/property-map"

const images: GalleryImage[] = [
  { id: "1", src: "/image/image1.jpg", alt: "Building" },
  { id: "2", src: "/image/image2.jpg", alt: "Room 1" },
  { id: "3", src: "/image/image3.jpg", alt: "Room 2" },
  { id: "4", src: "/image/image4.jpg", alt: "Room 3" },
  { id: "5", src: "/image/image5.jpg", alt: "Room 4" },
  { id: "6", src: "/image/image6.jpg", alt: "Room 5" },
]

export default function PropertyDetail() {
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
              price="₦3,000,000"
              location="14 crescent road, Ikeja, Lagos state"
            />
          </div>

     
         {/* RIGHT — Smaller */}
          <div className="lg:col-span-4">
            <ContactCard
            agentImage="/image/profile-image2.jpg"
              agentName="June Austen"
              agency="ABX real estate agency"
              phone="+234 902 002 000"
            />
          </div>
        </div>
      </div>
      <PropertyMap location="Enugu, Nigeria" height="h-[400px]" />
      <OtherProperties agentName="Jane" />
    </div>
  )
}