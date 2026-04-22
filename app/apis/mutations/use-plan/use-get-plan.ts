'use client';

import { useQuery } from '@tanstack/react-query';
import { getMyProperties } from '../../services/property-service/property-service-clientt';
import { getPlans } from '../../services/plan-service/plan-service-client';

export function useGetPlans() {
  return useQuery({
    queryKey: ['plans-data'],
    queryFn: getPlans,
    refetchOnWindowFocus: true,
  });
}
