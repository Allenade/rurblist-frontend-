"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AddNewPropertyPopup, PropertyAddedSuccessPopup } from "@/components/popUp";
import { useLayoutStore } from "@/store/layout-store";

const SECTION_HEADING_CLASS =
  "font-serif text-xl font-bold text-brand-900 sm:text-2xl";

const CARD_CLASS = "rounded-xl border border-border bg-white p-6 shadow-sm";

function ListingCard({
  imageSrc,
  imageAlt,
  title,
  price,
  pricePeriod,
  bedrooms,
  bathrooms,
  sqft,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  pricePeriod: string;
  bedrooms: string;
  bathrooms: string;
  sqft: string;
}) {
  return (
    <article className={`overflow-hidden ${CARD_CLASS} p-0`}>
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <span className="absolute left-3 top-3 rounded bg-brand-500 px-2 py-1 text-xs font-medium text-white">
          For rent
        </span>
      </div>
      <div className="border-t border-border p-4">
        <h3 className="font-semibold text-brand-950 line-clamp-1">{title}</h3>
        <p className="mt-2">
          <span className="text-lg font-bold text-brand-950">{price}</span>
          <span className="ml-1 text-sm text-muted-foreground">
            {pricePeriod}
          </span>
        </p>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            {bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            {sqft}
          </span>
        </div>
        <div className="mt-3 flex gap-4 border-t border-border pt-3">
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm text-foreground hover:text-brand-600"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Edit
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

const MESSAGE_CARD = {
  name: "John D",
  type: "Requested Tour: In-person",
  dateTime: "Date & Time: Thursday, October 12th, 3:00 PM",
  property: "Property: Greenwich Village Apartment",
  sentAt: "October 2nd, 2024. 10am",
};

function MessageCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
      <div className="flex gap-3">
        <div
          className="h-10 w-10 shrink-0 rounded-full bg-gray-200"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className="font-bold text-brand-950">{MESSAGE_CARD.name}</p>
          <p className="mt-0.5 text-sm text-foreground">{MESSAGE_CARD.type}</p>
          <p className="mt-0.5 text-sm text-foreground">
            {MESSAGE_CARD.dateTime}
          </p>
          <p className="mt-0.5 text-sm text-foreground">
            {MESSAGE_CARD.property}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {MESSAGE_CARD.sentAt}
          </p>
          <button
            type="button"
            className="mt-2 text-sm font-medium text-brand-600 hover:underline"
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AgentPrivateProfilePage() {
  const setHideNavbar = useLayoutStore((state) => state.setHideNavbar);
  const [showAddListingModal, setShowAddListingModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    setHideNavbar(true);
    return () => setHideNavbar(false);
  }, [setHideNavbar]);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 pb-12 pt-8">
        {/* Header: Back + Logo (same as public) */}
        <div className="relative flex items-center justify-between py-2">
          <Link
            href="/agent/profile"
            className="flex items-center gap-2 text-brand-900 hover:underline"
            aria-label="Back"
          >
            <svg
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </Link>
          <Image
            src="/Rublist.svg"
            alt="Rurblist"
            width={48}
            height={15}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          <div className="w-14" aria-hidden />
        </div>

        {/* Agent Info Section */}
        <h2 className={`mt-10 ${SECTION_HEADING_CLASS}`}>Agent Info Section</h2>
        <div className={`mt-4 flex flex-wrap items-center gap-6 ${CARD_CLASS}`}>
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-brand-950 bg-linear-to-br from-blue-100 to-purple-100">
            <Image
              src="/image/profile-img.png"
              alt="Jane Austen"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-lg font-bold text-brand-950">Jane Austen</p>
            <p className="mt-1 text-sm text-muted-foreground">
              ABC real estate agency
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              10 years of experience
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Area of operation: Warri, Ughelli
            </p>
          </div>
        </div>

        {/* Contact Info + About Agent */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className={SECTION_HEADING_CLASS}>Contact Info</h2>
            <div className={`mt-4 ${CARD_CLASS}`}>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <svg
                    className="h-5 w-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>(+234) 220 022 002</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <svg
                    className="h-5 w-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Jane@Rubrlist.com</span>
                </div>
              </div>
            </div>
            {/* Edit profile information - under Contact Info only */}
            <button
              type="button"
              className="mt-4 flex items-center gap-2 rounded-lg border-2 border-border bg-gray-100 py-3 px-6 text-sm font-medium text-foreground hover:bg-gray-200"
            >
              <svg
                className="h-4 w-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Edit profile information
            </button>
          </div>
          <div>
            <h2 className={SECTION_HEADING_CLASS}>About Agent</h2>
            <div className={`mt-4 ${CARD_CLASS}`}>
              <p className="text-sm leading-relaxed text-foreground">
                This modern 2-bedroom apartment is located in the heart of
                Ikeja, offering convenience and comfort for urban living.
                Featuring spacious bedrooms, a fully equipped kitchen, and a
                balcony with panoramic views, this apartment is perfect for
                professionals or small families. Enjoy access to on-site
                amenities including a swimming pool, gym, and 24/7 security.
              </p>
            </div>
          </div>
        </div>

        {/* Current listings */}
        <div className="mt-10">
          <h2 className={`flex items-center gap-2 ${SECTION_HEADING_CLASS}`}>
            Current listings
            <svg
              className="h-5 w-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </h2>
          <button
            type="button"
            onClick={() => setShowAddListingModal(true)}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white hover:bg-brand-600"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add new listing
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ListingCard
            imageSrc="/image/image1.jpg"
            imageAlt="Modern 2-Bedroom Apartment"
            title="Modern 2-Bedroom Apartment in Prime Location"
            price="₦3,000,000"
            pricePeriod="yearly"
            bedrooms="2 bedroom"
            bathrooms="2 bath"
            sqft="800 sqft"
          />
          <ListingCard
            imageSrc="/image/image2.jpg"
            imageAlt="Property listing"
            title="Modern 2-Bedroom Apartment in Prime Location"
            price="₦3,000,000"
            pricePeriod="yearly"
            bedrooms="2 bedroom"
            bathrooms="2 bath"
            sqft="800 sqft"
          />
        </div>

        {/* Messages */}
        <div className="mt-10">
          <h2 className={`flex items-center gap-2 ${SECTION_HEADING_CLASS}`}>
            Messages
            <svg
              className="h-5 w-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </h2>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <MessageCard key={i} />
          ))}
        </div>
      </div>

      <AddNewPropertyPopup
        open={showAddListingModal}
        onClose={() => setShowAddListingModal(false)}
        onPublishSuccess={() => setShowSuccessPopup(true)}
      />
      <PropertyAddedSuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
      />
    </div>
  );
}
