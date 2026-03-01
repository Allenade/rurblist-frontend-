"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLayoutStore } from "@/store/layout-store";

const SECTION_HEADING_CLASS =
  "font-serif text-xl font-bold text-brand-900 sm:text-2xl";

const CARD_CLASS = "rounded-xl border border-border bg-white p-6 shadow-sm";

const TOUR_CARD = {
  property: "2-Bedroom Apartment in Greenwich Village",
  agent: "John D.",
  dateTime: "Thursday, October 12, 3:00 PM",
  tourType: "In-Person Tour",
};

function TourCard() {
  return (
    <div
      className={`${CARD_CLASS} flex min-w-70 shrink-0 flex-col snap-center sm:min-w-[320px]`}
    >
      <p className="text-sm text-foreground">
        <span className="font-medium">Property Info:</span>{" "}
        {TOUR_CARD.property}
      </p>
      <p className="mt-1 text-sm text-foreground">
        <span className="font-medium">Agent:</span> {TOUR_CARD.agent}
      </p>
      <p className="mt-1 text-sm text-foreground">
        <span className="font-medium">Requested Date & Time:</span>{" "}
        {TOUR_CARD.dateTime}
      </p>
      <p className="mt-1 text-sm text-foreground">
        <span className="font-medium">Tour Type:</span> {TOUR_CARD.tourType}
      </p>
      <button
        type="button"
        className="mt-4 w-full rounded-lg border border-border bg-gray-100 py-2.5 text-sm font-medium text-foreground hover:bg-gray-200"
      >
        Cancel tour
      </button>
    </div>
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
    <div className="min-w-70 shrink-0 snap-center rounded-lg border border-border bg-white p-4 shadow-sm sm:min-w-[320px]">
      <div className="flex gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200" aria-hidden />
        <div className="min-w-0 flex-1">
          <p className="font-bold text-brand-950">{MESSAGE_CARD.name}</p>
          <p className="mt-0.5 text-sm text-foreground">{MESSAGE_CARD.type}</p>
          <p className="mt-0.5 text-sm text-foreground">{MESSAGE_CARD.dateTime}</p>
          <p className="mt-0.5 text-sm text-foreground">{MESSAGE_CARD.property}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{MESSAGE_CARD.sentAt}</p>
          <button type="button" className="mt-2 text-sm font-medium text-brand-600 hover:underline">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}

function SavedPropertyCard({
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
        <span className="absolute left-3 top-3 rounded bg-brand-950 px-2 py-1 text-xs font-medium text-white">
          For rent
        </span>
      </div>
      <div className="border-t border-border p-4">
        <h3 className="font-semibold text-brand-950 line-clamp-1">{title}</h3>
        <p className="mt-2">
          <span className="text-lg font-bold text-brand-950">{price}</span>
          <span className="ml-1 text-sm text-muted-foreground">{pricePeriod}</span>
        </p>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            {bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {sqft}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function HouseSeekerProfilePage() {
  const setHideNavbar = useLayoutStore((s) => s.setHideNavbar);

  useEffect(() => {
    setHideNavbar(true);
    return () => setHideNavbar(false);
  }, [setHideNavbar]);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 pb-12 pt-8">
        {/* Header: Back + Logo + Settings */}
        <div className="relative flex items-center justify-between py-2">
          <Link
            href="/"
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
          <Link
            href="/house-seeker/profile/settings"
            className="text-muted-foreground hover:text-foreground"
            aria-label="Settings"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
        </div>

        {/* Page title */}
        <h1 className={`mt-10 ${SECTION_HEADING_CLASS}`}>
          House seeker profile
        </h1>

        {/* Basic Info */}
        <h2 className={`mt-10 ${SECTION_HEADING_CLASS}`}>Basic Info</h2>
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
              janeausten@email.com
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              +220 022 240 020
            </p>
          </div>
        </div>

        {/* Upcoming Tours – horizontal slider */}
        <h2 className={`mt-10 ${SECTION_HEADING_CLASS}`}>Upcoming Tours</h2>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2 scroll-smooth scrollbar-thin md:snap-x md:snap-mandatory">
          <TourCard />
          <TourCard />
          <TourCard />
        </div>

        {/* Saved Properties */}
        <h2 className={`mt-10 ${SECTION_HEADING_CLASS}`}>Saved Properties</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <SavedPropertyCard
            imageSrc="/image/image1.jpg"
            imageAlt="Modern 2-Bedroom Apartment"
            title="Modern 2-Bedroom Apartment in Prime Location"
            price="₦3,000,000"
            pricePeriod="yearly"
            bedrooms="2 bedroom"
            bathrooms="2 bath"
            sqft="800 sqft"
          />
          <SavedPropertyCard
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

        {/* Messages – horizontal slider */}
        <h2 className={`mt-10 flex items-center gap-2 ${SECTION_HEADING_CLASS}`}>
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
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2 scroll-smooth md:snap-x md:snap-mandatory">
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </div>
      </div>
    </div>
  );
}
