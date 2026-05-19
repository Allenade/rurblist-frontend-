'use client';

import { useQuery } from '@tanstack/react-query';
import { queryTiming } from '@/shared/react-query/query-options';
import { getVerificationById } from '@/features/verification/services/verification-service-client';

export function useGetVerificationById(id: string) {
  return useQuery({
    queryKey: ['plan-id', id],
    queryFn: () => getVerificationById(id),
    enabled: !!id,
    ...queryTiming.detail,
  });
}
