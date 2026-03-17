"use client";

import { useEffect, useState } from "react";
import { AddNewPropertyPopup, PropertyAddedSuccessPopup } from "@/components/popUp";
import { useLayoutStore } from "@/store/layout-store";
import BackNavbar from "@/components/agent-c/back-navbar";
import { AgentInfoSection } from "@/components/agent-c/agent-info-section";
import CurrentListingsSection from "@/components/agent-c/current-listings-section";
import MessagesSection from "@/components/agent-c/messaging/messages-section";



export default function AgentPrivateProfilePage() {
  const setHideNavbar = useLayoutStore((state) => state.setHideNavbar);
  const [showAddListingModal, setShowAddListingModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    setHideNavbar(true);
    return () => setHideNavbar(false);
  }, [setHideNavbar]);

  return (
    <div>
      <BackNavbar logoSrc="/Rublist.svg" />
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AgentInfoSection
          agent={{
            name: "Jane Austen",
            agency: "ABC real estate agency",
            experience: "10 years of experience",
            location: "Warri, Ughelli",
            image: "/image/profile-image2.jpg",
            phone: "(+234) 220 022 002",
            email: "Jane@Rubrlist.com",
            about:
              "This modern 2-bedroom apartment is located in the heart of Ikeja, offering convenience and comfort for urban living. Featuring spacious bedrooms, a fully equipped kitchen, and a balcony with panoramic views, this apartment is perfect for professionals or small families. Enjoy access to on-site amenities including a swimming pool, gym, and 24/7 security.",
          }}
        />
        <CurrentListingsSection
          properties={[
            {
              id: "1",
              title: "Modern 2-Bedroom Apartment in Prime Location",
              price: 2000000,
              status: "For_Rent",
              bedrooms: 2,
              bathrooms: 2,
              sqft: 800,
              image: "/image/image3.jpg",
            },
            {
              id: "2",
              title: "Modern 2-Bedroom Apartment in Prime Location",
              price: 3000000,
              status: "For_Rent",
              bedrooms: 2,
              bathrooms: 2,
              sqft: 800,
              image: "/image/image1.jpg",
            },
            {
              id: "3",
              title: "Modern 2-Bedroom Apartment in Prime Location",
              price: 4000000,
              status: "For_Rent",
              bedrooms: 2,
              bathrooms: 2,
              sqft: 800,
              image: "/image/image2.jpg",
            },
            {
              id: "4",
              title: "Modern 2-Bedroom Apartment in Prime Location",
              price: 5000000,
              status: "For_Rent",
              bedrooms: 2,
              bathrooms: 2,
              sqft: 800,
              image: "/image/image4.jpg",
            },
          ]}
        />

        <MessagesSection
          messages={[
            {
              id: "1",
              name: "John D",
              message: "Requested Tour: In-person",
              date: "Date & Time: Thursday, October 12th, 3:00 PM",
              property: "Greenwich Village Apartment",
              timestamp: "October 2nd, 2024. 10am",
            },
            {
              id: "2",
              name: "Tolu D",
              message: "Requested Tour: In-person",
              date: "Date & Time: Thursday, October 12th, 3:00 PM",
              property: "Greenwich Village Apartment",
              timestamp: "October 2nd, 2024. 10am",
            },
            {
              id: "3",
              name: "Joshua Omozua",
              message: "Requested Tour: In-person",
              date: "Date & Time: Thursday, October 12th, 3:00 PM",
              property: "Greenwich Village Apartment",
              timestamp: "October 2nd, 2024. 10am",
            },
            {
              id: "4",
              name: "pater D",
              message: "Requested Tour: In-person",
              date: "Date & Time: Thursday, October 12th, 3:00 PM",
              property: "Greenwich Village Apartment",
              timestamp: "October 2nd, 2024. 10am",
            },
        ]}
/>
      </div>
    </div>
  
  );
}
