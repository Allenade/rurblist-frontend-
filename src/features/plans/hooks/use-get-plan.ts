'use client';

import { useQuery } from '@tanstack/react-query';
import { queryTiming } from '@/shared/react-query/query-options';
import { getPlans } from '@/features/plans/services/plan-service-client';

export function useGetPlans() {
  return useQuery({
    queryKey: ['plans-data'],
    queryFn: getPlans,
    ...queryTiming.static,
  });
}
