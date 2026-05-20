'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import {
  LazyPropertyVerificationsSection,
  LazySavedPropertiesSection,
  LazyUpcomingToursSection,
  PropertyVerificationsSkeleton,
  SavedPropertiesSkeleton,
  TourCardSkeleton,
} from '@/features/users/components/home-seeker';
import { useGetCurrentAgent } from '@/features/agents/hooks';
import { useGetMyProperties } from '@/features/properties/hooks';
import { useLayoutStore } from '@/shared/layout';
import { useGetSavedProperties } from '@/features/users/hooks';
import { useSaveProperty } from '@/features/properties/hooks';
import { useGetTourAgents } from '@/features/tours/hooks';
import { useGetTourUsers } from '@/features/tours/hooks';
import { useCancelTour } from '@/features/tours/hooks';
import { formatTourDate } from '@/shared/utils/format-tour-date';
import { getLocalPropertyState, setLocalPropertyState } from '@/features/properties/utils';
import { useGetVerifications } from '@/features/verification/hooks';
import { useDeleteProperty } from '@/features/properties/hooks';
import { OrangeButton } from '@/shared/ui';
import { useDeferredReady } from '@/shared/hooks/use-deferred-ready';
import { AgentInfoSection } from '../agent-info-section';
import AgentInfoSectionSkeleton from '../agent-info-section-skeleton';
import BackNavbar from '../back-navbar';
import CurrentListingsSectionSkeleton from '../current-listings-section-skeleton';
import MessagesSectionSkeleton from '../messaging/messages-section-skeleton';

const CurrentListingsSection = dynamic(
  () => import('@/features/agents/components/current-listings-section'),
  { loading: () => <CurrentListingsSectionSkeleton /> },
);

const MessagesSection = dynamic(() => import('@/features/agents/components/messaging/messages-section'), {
  loading: () => <MessagesSectionSkeleton />,
});

type Listing = {
  id: string;
  title: string;
  price: number;
  status: 'For_Rent' | 'For_Sale' | 'Sold';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
};

export function AgentPrivateProfilePage() {
  const setHideNavbar = useLayoutStore((state) => state.setHideNavbar);
  const router = useRouter();
  const deferredReady = useDeferredReady(250);
  const { data, isLoading } = useGetCurrentAgent();
  const {
    data: tour,
    isLoading: isFetching,
    fetchNextPage: fetchMoreMessages,
    hasNextPage: hasNextMessagesPage,
    isFetchingNextPage: isFetchingMoreMessages,
  } = useGetTourAgents(deferredReady);
  const {
    data: userTours,
    isLoading: isUserToursFetching,
    fetchNextPage: fetchMoreTours,
    hasNextPage: hasNextToursPage,
    isFetchingNextPage: isFetchingMoreTours,
  } = useGetTourUsers(deferredReady);
  const {
    data: propertiesData,
    isLoading: isPropertiesLoading,
    fetchNextPage: fetchMoreProperties,
    hasNextPage: hasNextPropertiesPage,
    isFetchingNextPage: isFetchingMoreProperties,
  } = useGetMyProperties(deferredReady);
  const {
    data: savedPropertiesData,
    isLoading: isSavedPropertiesLoading,
    fetchNextPage: fetchMoreSavedProperties,
    hasNextPage: hasNextSavedPropertiesPage,
    isFetchingNextPage: isFetchingMoreSavedProperties,
  } = useGetSavedProperties(deferredReady);
  const {
    data: verificationsData,
    isLoading: isVerificationsLoading,
    fetchNextPage: fetchMoreVerifications,
    hasNextPage: hasNextVerificationsPage,
    isFetchingNextPage: isFetchingMoreVerifications,
  } = useGetVerifications(deferredReady);
  const { unsave } = useSaveProperty();
  const { mutate: cancelTour } = useCancelTour();
  const { mutate: deleteProperty, isPending: isDeletingProperty } = useDeleteProperty();
  const [loadingTourId, setLoadingTourId] = useState<string | null>(null);
  const [removedSavedIds, setRemovedSavedIds] = useState<string[]>([]);
  const [propertyToDelete, setPropertyToDelete] = useState<Listing | null>(null);

  useEffect(() => {
    setHideNavbar(true);
    return () => setHideNavbar(false);
  }, [setHideNavbar]);

  const agentData = data?.data;
  const currentAgent = agentData?.user;
  const currentUserId = currentAgent?._id;
  const isAgent = agentData?.isAgreement;
  const properties = useMemo(
    () => propertiesData?.pages.flatMap((page) => page.data ?? []) ?? [],
    [propertiesData?.pages],
  );
  const savedProperties = useMemo(
    () => savedPropertiesData?.pages.flatMap((page) => page.data ?? []) ?? [],
    [savedPropertiesData?.pages],
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const locallyUnsavedIds = savedProperties
        .filter((property) => getLocalPropertyState(property._id, currentUserId)?.isSaved === false)
        .map((property) => property._id);

      setRemovedSavedIds(locallyUnsavedIds);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [currentUserId, savedProperties]);

  const agent = useMemo(
    () => ({
      name:
        currentAgent?.fullName ||
        [agentData?.firstName, agentData?.lastName].filter(Boolean).join(' ') ||
        'Agent',
      agency: agentData?.companyName || currentAgent?.roles?.[0] || 'Real estate agency',
      experience: `${agentData?.yearsOfExperience ?? 0} years of experience`,
      location:
        [agentData?.city, agentData?.address].filter(Boolean).join(', ') || 'No location added',
      image:
        currentAgent?.profileImage?.url || agentData?.selfieUrl.url || '/image/profile-image2.jpg',
      phone: currentAgent?.phoneNumber || 'No phone number added',
      email: currentAgent?.email || 'No email added',
      about:
        agentData?.description || 'Create your agent profile to add your agency details and bio.',
    }),
    [agentData, currentAgent],
  );

  const listings = useMemo(
    () =>
      properties.map((property) => ({
        id: property._id,
        title: property.title,
        price: property.price,
        status: property.status as 'For_Rent' | 'For_Sale' | 'Sold',
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        sqft: property.size,
        image: property.images?.[0]?.url || '/image/image1.jpg',
      })),
    [properties],
  );

  const saveListings = useMemo(
    () =>
      savedProperties
        .filter((property) => !removedSavedIds.includes(property._id))
        .map((property) => ({
          id: property._id,
          title: property.title,
          price: property.price,
          status: property.status as 'For_Rent' | 'For_Sale' | 'Sold',
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          sqft: property.size,
          image: property.images?.[0]?.url || '/image/image1.jpg',
        })),
    [removedSavedIds, savedProperties],
  );

  const handleRemove = useCallback((id?: string) => {
    if (!id) return;

    const previousIds = removedSavedIds;
    const nextIds = Array.from(new Set([...removedSavedIds, id]));

    setRemovedSavedIds(nextIds);
    setLocalPropertyState(id, currentUserId, { isSaved: false });

    unsave(id, {
      onError: (error) => {
        console.error(error);
        setRemovedSavedIds(previousIds);
        setLocalPropertyState(id, currentUserId, { isSaved: true });
      },
    });
  }, [currentUserId, removedSavedIds, unsave]);

  const handleCancelTour = useCallback((id: string) => {
    if (loadingTourId === id) return;

    setLoadingTourId(id);
    cancelTour(id, {
      onSettled: () => {
        setLoadingTourId(null);
      },
    });
  }, [cancelTour, loadingTourId]);

  const handleDeleteProperty = useCallback(() => {
    if (!propertyToDelete) return;

    deleteProperty(propertyToDelete.id, {
      onSuccess: () => {
        setPropertyToDelete(null);
      },
    });
  }, [deleteProperty, propertyToDelete]);

  const handleAgentAction = useCallback(() => {
    router.push('/agent/request');
  }, [router]);

  const handleEditProperty = useCallback(
    (id: string) => {
      router.push(`/agent/add-property?propertyId=${id}`);
    },
    [router],
  );

  const handleDeletePropertyRequest = useCallback((property: Listing) => {
    setPropertyToDelete(property);
  }, []);

  const handleOpenVerification = useCallback(
    (verificationId: string) => {
      router.push(`/verification?id=${verificationId}`);
    },
    [router],
  );

  const messages = useMemo(
    () =>
      tour?.pages.flatMap((page) => page.data ?? []).map((t) => ({
        id: t._id,
        name: t.user?.fullName || 'Unknown User',
        message: `Requested Tour: ${t.tourType === 'call' ? 'Virtual' : t.tourType === 'in-person' ? 'In-person' : 'Inspection'}`,
        date: `Date & Time: ${formatTourDate(t.date)}`,
        property: ` ${t.property?.title || 'No property'}`,
        timestamp: new Date(t.createdAt).toLocaleString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        }),
        avatar: t.user?.profileImage?.url ?? t.agent?.selfieUrl?.url ?? undefined,
        tour: t,
      })) ?? [],
    [tour?.pages],
  );

  const tours = useMemo(
    () =>
      userTours?.pages.flatMap((page) => page.data ?? []).map((t) => ({
        id: t._id,
        propertyTitle: t.property?.title || 'No property',
        agentName: t.agent?.user?.fullName || 'No agent',
        dateTime: formatTourDate(t.date),
        status: t.status,
        message: t.note,
        tourType:
          t.tourType === 'call'
            ? 'Virtual Tour'
            : t.tourType === 'inspection'
              ? 'Inspection'
              : 'In-Person Tour',
      })) ?? [],
    [userTours?.pages],
  );

  const verifications = useMemo(
    () =>
      verificationsData?.pages.flatMap((page) => page.data ?? []).map((verification) => ({
        id: verification._id,
        propertyTitle: verification.property?.title || 'Property',
        status: verification.status || 'pending',
        stage: verification.currentStage?.title || 'Verification in progress',
        date: verification.updatedAt || verification.createdAt,
      })) ?? [],
    [verificationsData?.pages],
  );

  return (
    <div>
      <BackNavbar logoSrc="/Rublist.svg" />
      <div className="max-w-7xl mx-auto space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        {isLoading ? (
          <AgentInfoSectionSkeleton />
        ) : (
          <AgentInfoSection
            agent={agent}
            isCreateAgent={!isAgent}
            onActionClick={handleAgentAction}
          />
        )}
        {!deferredReady || isPropertiesLoading ? (
          <CurrentListingsSectionSkeleton />
        ) : (
          <CurrentListingsSection
            properties={listings}
            onEditProperty={handleEditProperty}
            onDeleteProperty={handleDeletePropertyRequest}
            hasNextPage={hasNextPropertiesPage}
            isFetchingMore={isFetchingMoreProperties}
            onLoadMore={() => fetchMoreProperties()}
          />
        )}
        {!deferredReady || isFetching ? (
          <MessagesSectionSkeleton />
        ) : (
          <MessagesSection
            messages={messages}
            hasNextPage={hasNextMessagesPage}
            isFetchingMore={isFetchingMoreMessages}
            onLoadMore={() => fetchMoreMessages()}
          />
        )}
        <div className="pt-2">
          {!deferredReady || isUserToursFetching ? (
            <TourCardSkeleton />
          ) : (
            <LazyUpcomingToursSection
              tours={tours}
              onCancelTour={handleCancelTour}
              loadingId={loadingTourId ?? undefined}
              hasNextPage={hasNextToursPage}
              isFetchingMore={isFetchingMoreTours}
              onLoadMore={() => fetchMoreTours()}
            />
          )}
        </div>
        <div className="pt-2">
          {!deferredReady || isVerificationsLoading ? (
            <PropertyVerificationsSkeleton />
          ) : (
            <LazyPropertyVerificationsSection
              verifications={verifications}
              onOpen={handleOpenVerification}
              hasNextPage={hasNextVerificationsPage}
              isFetchingMore={isFetchingMoreVerifications}
              onLoadMore={() => fetchMoreVerifications()}
            />
          )}
        </div>
        {!deferredReady || isSavedPropertiesLoading ? (
          <SavedPropertiesSkeleton />
        ) : (
          <LazySavedPropertiesSection
            properties={saveListings}
            onRemove={handleRemove}
            hasNextPage={hasNextSavedPropertiesPage}
            isFetchingMore={isFetchingMoreSavedProperties}
            onLoadMore={() => fetchMoreSavedProperties()}
          />
        )}
      </div>

      {propertyToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h2 className="font-[Georgia] text-xl font-bold text-[#833700]">
              Delete property?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              You are about to delete {propertyToDelete.title}. This action cannot be undone.
            </p>

            <div className="mt-6 flex gap-3">
              <OrangeButton
                type="button"
                variant="white"
                fullWidth
                disabled={isDeletingProperty}
                onClick={() => setPropertyToDelete(null)}
              >
                No
              </OrangeButton>

              <OrangeButton
                type="button"
                fullWidth
                loading={isDeletingProperty}
                onClick={handleDeleteProperty}
              >
                Yes, delete
              </OrangeButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
