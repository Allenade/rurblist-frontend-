'use client';

import { useQuery } from '@tanstack/react-query';
import { queryTiming } from '@/shared/react-query';
import { getPropertyById } from '../services/property-service-client';

export function useGetPropertyById(id: string) {
  return useQuery({
    queryKey: ['propertyId', id],
    queryFn: () => getPropertyById(id),
    enabled: !!id,
    ...queryTiming.detail,
  });
}
