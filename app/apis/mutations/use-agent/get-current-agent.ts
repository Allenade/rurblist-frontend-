'use client';

import { useQuery } from '@tanstack/react-query';
import { getCurrentAgent } from '../../services/agent-service/agent-service';

export function useGetCurrentAgent() {
  return useQuery({
    queryKey: ['current-agent'],
    queryFn: getCurrentAgent,

    refetchOnWindowFocus: true,
  });
}
