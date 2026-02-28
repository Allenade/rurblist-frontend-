"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLayoutStore } from "@/store/layout-store";

const SECTION_HEADING_CLASS =
  "font-serif text-xl font-bold text-brand-900 sm:text-2xl";

const CARD_CLASS = "rounded-xl border border-border bg-white p-6 shadow-sm";

const StarFull = ({ className = "h-5 w-5 text-amber-500" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const StarPartial = ({ className = "h-5 w-5" }: { className?: string }) => (
  <span className={`relative inline-block ${className}`} aria-hidden>
    <svg className="absolute inset-0 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <span className="overflow-hidden" style={{ width: "66%" }}>
      <svg className="text-amber-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  </span>
);
const StarEmpty = ({ className = "h-5 w-5 text-gray-200" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function PropertyCard({
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

export default function AgentProfilePage() {
  const setHideNavbar = useLayoutStore((state) => state.setHideNavbar);

  useEffect(() => {
    setHideNavbar(true);
    return () => setHideNavbar(false);
  }, [setHideNavbar]);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 pb-12 pt-8">
        {/* Header: Back left, logo center, same line; space below */}
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
          <div className="w-14" aria-hidden />
        </div>

        {/* Agent Info Section - card */}
        <h2 className={`mt-36 ${SECTION_HEADING_CLASS}`}>Agent Info Section</h2>
        <div className={`mt-4 flex flex-wrap items-center gap-6 ${CARD_CLASS}`}>
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-brand-950 bg-gradient-to-br from-blue-100 to-purple-100">
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

        {/* Contact Info + About Agent: two columns, each in a card */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact Info - card */}
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
                    aria-hidden
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
                    aria-hidden
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
                <textarea
                  placeholder="Write a message..."
                  rows={4}
                  className="mt-3 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  aria-label="Message to agent"
                />
                <button
                  type="button"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white bg-brand-500 py-3 font-medium text-white shadow-sm transition-colors hover:bg-brand-600"
                >
                  <svg
                    className="h-5 w-5"
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
                  Send a message
                </button>
              </div>
            </div>
          </div>

          {/* About Agent - card */}
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

        {/* Other properties from Jane - card grid */}
        <h2 className={`mt-10 ${SECTION_HEADING_CLASS}`}>
          Other properties from Jane
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PropertyCard
            imageSrc="/image/image1.jpg"
            imageAlt="Modern 2-Bedroom Apartment"
            title="Modern 2-Bedroom Apartment in Prime Location"
            price="₦3,000,000"
            pricePeriod="yearly"
            bedrooms="2 bedroom"
            bathrooms="2 bath"
            sqft="800 sqft"
          />
          <PropertyCard
            imageSrc="/image/image2.jpg"
            imageAlt="Property listing"
            title="Modern 2-Bedroom Apartment in Prime Location"
            price="₦3,000,000"
            pricePeriod="yearly"
            bedrooms="2 bedroom"
            bathrooms="2 bath"
            sqft="800 sqft"
          />
          <PropertyCard
            imageSrc="/image/image3.jpg"
            imageAlt="Property listing"
            title="Modern 2-Bedroom Apartment in Prime Location"
            price="₦3,000,000"
            pricePeriod="yearly"
            bedrooms="2 bedroom"
            bathrooms="2 bath"
            sqft="800 sqft"
          />
          <PropertyCard
            imageSrc="/image/image4.jpg"
            imageAlt="Property listing"
            title="Modern 2-Bedroom Apartment in Prime Location"
            price="₦3,000,000"
            pricePeriod="yearly"
            bedrooms="2 bedroom"
            bathrooms="2 bath"
            sqft="800 sqft"
          />
        </div>

        {/* Ratings and Reviews */}
        <h2 className={`mt-10 ${SECTION_HEADING_CLASS}`}>Ratings and Reviews</h2>
        <div className={`mt-4 ${CARD_CLASS}`}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            {/* Overall rating: 4.7 + stars + (12 ratings) */}
            <div>
              <p className="text-3xl font-bold text-brand-950">4.7</p>
              <div className="mt-1 flex gap-0.5">
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
                <StarPartial />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">(12 ratings)</p>
            </div>
            {/* Rating distribution bars */}
            <div className="min-w-[200px] space-y-2">
              {[
                { stars: 5, width: "85%" },
                { stars: 4, width: "70%" },
                { stars: 3, width: "35%" },
                { stars: 2, width: "10%" },
                { stars: 1, width: "5%" },
              ].map(({ stars, width }) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="w-4 text-sm text-foreground">{stars}</span>
                  <StarFull className="h-4 w-4 text-amber-500" />
                  <div className="flex-1 rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-brand-500"
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review cards - 3 in a row */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-muted/30 p-4"
              >
                <div className="flex gap-0.5">
                  <StarFull className="h-4 w-4 text-amber-500" />
                  <StarFull className="h-4 w-4 text-amber-500" />
                  <StarFull className="h-4 w-4 text-amber-500" />
                  <StarFull className="h-4 w-4 text-amber-500" />
                  <StarEmpty className="h-4 w-4" />
                </div>
                <p className="mt-2 font-bold text-brand-950">Emily</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A wonderful experience from start to finish. Jane is very
                  professional and knowledgeable.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
