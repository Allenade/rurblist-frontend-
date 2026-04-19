'use client';

import { useQuery } from '@tanstack/react-query';
import { getSavedProperties } from '../../services/user-service/user-service-client';

export function useGetSavedProperties() {
  return useQuery({
    queryKey: ['saved-propertys'],
    queryFn: getSavedProperties,
    refetchOnWindowFocus: true,
  });
}
