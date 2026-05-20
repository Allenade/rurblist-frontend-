'use client';

import dynamic from 'next/dynamic';

function SectionSkeleton({ className }: { className: string }) {
  return (
    <div className={`animate-pulse rounded-xl border border-gray-200 bg-gray-100 ${className}`} />
  );
}

export const LazyContactCard = dynamic(() => import('./contact-card'), {
  loading: () => <SectionSkeleton className="h-80" />,
});

export const LazyOtherProperties = dynamic(() => import('./other-properties'), {
  loading: () => <SectionSkeleton className="h-64" />,
});

export const LazyPropertyMap = dynamic(() => import('./property-map'), {
  loading: () => <SectionSkeleton className="h-100" />,
});
