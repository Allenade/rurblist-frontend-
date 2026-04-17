'use client';

import { useQuery } from '@tanstack/react-query';
import { getAgentById } from '../../services/agent-service/agent-service';

export function useGetAgentById(agentId?: string) {
  return useQuery({
    queryKey: ['agentById', agentId],
    queryFn: () => getAgentById(agentId!),
    enabled: !!agentId, // ✅ only runs when id exists
    refetchOnWindowFocus: true,
  });
}
