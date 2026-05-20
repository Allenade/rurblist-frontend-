'use client';

import { useQuery } from '@tanstack/react-query';
import { queryTiming } from '@/shared/react-query';
import { getPlans } from '../services/plan-service-client';

export function useGetPlans() {
  return useQuery({
    queryKey: ['plans-data'],
    queryFn: getPlans,
    ...queryTiming.static,
  });
}
