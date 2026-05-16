'use client';

import { useQuery } from '@tanstack/react-query';
import { queryTiming } from '@/shared/react-query/query-options';
import { getAgentById } from '@/features/agents/services/agent-service-client';

export function useGetAgentById(agentId?: string) {
  return useQuery({
    queryKey: ['agentById', agentId],
    queryFn: () => getAgentById(agentId!),
    enabled: !!agentId,
    ...queryTiming.detail,
  });
}
