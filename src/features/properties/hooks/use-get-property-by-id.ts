'use client';

import { useQuery } from '@tanstack/react-query';
import { queryTiming } from '@/shared/react-query/query-options';
import { getPropertyById } from '@/features/properties/services/property-service-client';

export function useGetPropertyById(id: string) {
  return useQuery({
    queryKey: ['propertyId', id],
    queryFn: () => getPropertyById(id),
    enabled: !!id,
    ...queryTiming.detail,
  });
}
