'use client';

import { useQuery } from '@tanstack/react-query';
import { getSavedProperties } from '../../services/user-service/user-services';

export function useGetSavedProperties() {
  return useQuery({
    queryKey: ['saved-propertys'],
    queryFn: getSavedProperties,
    refetchOnWindowFocus: true,
  });
}
