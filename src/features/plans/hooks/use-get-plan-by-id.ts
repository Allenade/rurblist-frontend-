'use client';

import { useQuery } from '@tanstack/react-query';
import { queryTiming } from '@/shared/react-query/query-options';
import { getPlanById } from '@/features/plans/services/plan-service-client';

export function useGetPlanById(id: string) {
  return useQuery({
    queryKey: ['plan-id', id],
    queryFn: () => getPlanById(id),
    enabled: !!id,
    ...queryTiming.detail,
  });
}
