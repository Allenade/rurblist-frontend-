'use client';

import dynamic from 'next/dynamic';
import PropertyVerificationsSkeleton from './loader-skeleton/property-verifications-skeleton';
import SavedPropertiesSkeleton from './loader-skeleton/save-property-skeleton';
import TourCardSkeleton from './loader-skeleton/tour-card-skeleton';

export const LazyUpcomingToursSection = dynamic(() => import('./upcoming-tours-section'), {
  loading: () => <TourCardSkeleton />,
});

export const LazyPropertyVerificationsSection = dynamic(
  () => import('./property-verifications-section'),
  {
    loading: () => <PropertyVerificationsSkeleton />,
  },
);

export const LazySavedPropertiesSection = dynamic(() => import('./save-properties'), {
  loading: () => <SavedPropertiesSkeleton />,
});
