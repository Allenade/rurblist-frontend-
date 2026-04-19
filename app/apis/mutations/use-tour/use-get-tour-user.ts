'use client';

import { useQuery } from '@tanstack/react-query';
import { getTourUser } from '../../services/tour-service/tour-service-client';

export function useGetTourUsers() {
  return useQuery({
    queryKey: ['tour-user'],
    queryFn: () => getTourUser(),

    refetchOnWindowFocus: true,
  });
}
