'use client';

import { useQuery } from '@tanstack/react-query';
import { getTourAgent } from '../../services/tour-service/tour-service-client';

export function useGetTourAgents() {
  return useQuery({
    queryKey: ['tour-agent'],
    queryFn: () => getTourAgent(),
    refetchOnWindowFocus: true,
  });
}
