'use client';

import { useQuery } from '@tanstack/react-query';
import { queryTiming } from '@/shared/react-query/query-options';
import { getCurrentAgent } from '@/features/agents/services/agent-service-client';

export function useGetCurrentAgent() {
  return useQuery({
    queryKey: ['current-agent'],
    queryFn: getCurrentAgent,
    ...queryTiming.detail,
  });
}
