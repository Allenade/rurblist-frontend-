'use client';

import { useQuery } from '@tanstack/react-query';
import { queryTiming } from '@/shared/react-query';
import { getTourById } from '@/features/tours/services/tour-service-client';

export function useGetTourById(tourId?: string) {
  return useQuery({
    queryKey: ['tourById', tourId],
    queryFn: () => getTourById(tourId!),
    enabled: !!tourId,
    ...queryTiming.detail,
  });
}
