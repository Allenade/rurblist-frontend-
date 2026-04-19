'use client';

import { useQuery } from '@tanstack/react-query';
import { getTourById } from '../../services/tour-service/tour-service-client';

export function useGetTourById(tourId?: string) {
  return useQuery({
    queryKey: ['tourById', tourId],
    queryFn: () => getTourById(tourId!),
    enabled: !!tourId, // ✅ only runs when id exists
    refetchOnWindowFocus: true,
  });
}
