'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutStore } from '@/store/layout-store';
import BackNavbar from '@/components/agent-c/back-navbar';
import HomeSeekerBasicInfoCard from '@/components/homeseeker-c/homeseeker-basicInfo-card';
import UpcomingToursSection from '@/components/homeseeker-c/upcoming-tours-section';
import SavedPropertiesSection from '@/components/homeseeker-c/save-properties';
import { useGetCurrentUser } from '@/app/apis/mutations/use-user/use-get-current-user';
import HomeSeekerBasicInfoSkeleton from '@/components/homeseeker-c/loader-skelenton/home-seeker-basicInfo-skeleton';
import { useGetSavedProperties } from '@/app/apis/mutations/use-user/use-get-saved-property';
import { useSaveProperty } from '@/app/apis/mutations/use-property/use-save-unsave-property';
import SavedPropertiesSkeleton from '@/components/homeseeker-c/loader-skelenton/save-property-skelenton';

const SECTION_HEADING_CLASS = 'font-serif text-xl font-bold text-brand-900 sm:text-2xl';

const CARD_CLASS = 'rounded-xl border border-border bg-white p-6 shadow-sm';

const TOUR_CARD = {
  property: '2-Bedroom Apartment in Greenwich Village',
  agent: 'John D.',
  dateTime: 'Thursday, October 12, 3:00 PM',
  tourType: 'In-Person Tour',
};

function TourCard() {
  return (
    <div className={`${CARD_CLASS} flex min-w-70 shrink-0 flex-col snap-center sm:min-w-[320px]`}>
      <p className="text-sm text-foreground">
        <span className="font-medium">Property Info:</span> {TOUR_CARD.property}
      </p>
      <p className="mt-1 text-sm text-foreground">
        <span className="font-medium">Agent:</span> {TOUR_CARD.agent}
      </p>
      <p className="mt-1 text-sm text-foreground">
        <span className="font-medium">Requested Date & Time:</span> {TOUR_CARD.dateTime}
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
  name: 'John D',
  type: 'Requested Tour: In-person',
  dateTime: 'Date & Time: Thursday, October 12th, 3:00 PM',
  property: 'Property: Greenwich Village Apartment',
  sentAt: 'October 2nd, 2024. 10am',
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
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </div>
    </article>
  );
}

export default function HouseSeekerProfilePage() {
  const setHideNavbar = useLayoutStore((s) => s.setHideNavbar);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const { data, isLoading } = useGetCurrentUser();
  const { data: savedPropertiesData, isLoading: isSavedPropertiesLoading } =
    useGetSavedProperties();
  const { unsave, isUnSaving } = useSaveProperty();
  const tours = [
    {
      id: '1',
      propertyTitle: '2-Bedroom Apartment in Greenwich Village',
      agentName: 'John D.',
      dateTime: 'Thursday, October 12, 3:00 PM',
      tourType: 'In-Person Tour',
    },
    {
      id: '2',
      propertyTitle: '2-Bedroom Apartment in Greenwich Village',
      agentName: 'John D.',
      dateTime: 'Thursday, October 12, 3:00 PM',
      tourType: 'In-Person Tour',
    },
    {
      id: '3',
      propertyTitle: '2-Bedroom Apartment in Greenwich Village',
      agentName: 'John D.',
      dateTime: 'Thursday, October 12, 3:00 PM',
      tourType: 'In-Person Tour',
    },
    {
      id: '4',
      propertyTitle: '2-Bedroom Apartment in Greenwich Village',
      agentName: 'John D.',
      dateTime: 'Thursday, October 12, 3:00 PM',
      tourType: 'In-Person Tour',
    },
  ];
  useEffect(() => {
    setHideNavbar(true);
    return () => setHideNavbar(false);
  }, [setHideNavbar]);
  const handleCancel = async (id: string) => {
    setLoadingId(id);

    // simulate API
    await new Promise((res) => setTimeout(res, 1500));

    setLoadingId(null);
  };
  const listings = (savedPropertiesData?.data ?? []).map((property) => ({
    id: property._id,
    title: property.title,
    price: property.price,
    status: property.status as 'For_Rent' | 'For_Sale' | 'Sold',
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    sqft: property.size,
    image: property.images?.[0]?.url || '/image/image1.jpg',
  }));

  const handleRemove = async (id?: string) => {
    if (!id) return;

    try {
      unsave(id); // ✅ call backend
    } catch (error) {
      console.error(error);
    }
  };
  const userData = data?.data;
  return (
    <div>
      <BackNavbar logoSrc="/Rublist.svg" />
      <div className="max-w-6xl mx-auto p-6 space-y-10">
        {/* Basic Info */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#7a3b0c]">Basic Info</h2>
          {isLoading ? (
            <HomeSeekerBasicInfoSkeleton />
          ) : (
            <HomeSeekerBasicInfoCard
              name={userData?.fullName || 'no name'}
              email={userData?.email || 'no email'}
              phone={userData?.phoneNumber || 'no phone'}
              image={userData?.profileImage.url || '/image/profile-image2.jpg'}
              address={`${userData?.role || 'No address added'}`}
            />
          )}
        </div>
        {/* Tours */}
        <UpcomingToursSection
          tours={tours}
          onCancelTour={handleCancel}
          loadingId={loadingId ?? undefined}
        />
        {isSavedPropertiesLoading ? (
          <SavedPropertiesSkeleton />
        ) : (
          <SavedPropertiesSection properties={listings} onRemove={handleRemove} />
        )}
      </div>
    </div>
  );
}
