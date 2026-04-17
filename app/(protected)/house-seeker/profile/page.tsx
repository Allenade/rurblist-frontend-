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
  const dataInfo = data?.data;
  const homeSeekerData = dataInfo?.homeSeeker;
  const userData = dataInfo?.user;

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
              address={`${userData?.roles[0] || 'No address added'}`}
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
