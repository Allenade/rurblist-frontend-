'use client';

import { useQuery } from '@tanstack/react-query';
import { getAgentPropertiesById } from '../../services/property-service/property-service-clientt';

export function useGetAgentPropertiesById(id: string) {
  return useQuery({
    queryKey: ['agent-property', id],
    queryFn: () => getAgentPropertiesById(id),
    enabled: !!id,
    refetchOnWindowFocus: true,
  });
}
