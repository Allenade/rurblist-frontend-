'use client';

import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/user-service/user-service-client';

export function useGetCurrentUser() {
  return useQuery({
    queryKey: ['current-user'],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 10, //10min,
    retry: false,
  });
}
