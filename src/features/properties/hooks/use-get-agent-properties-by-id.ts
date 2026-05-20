'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/api/base-response';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { PropertyModel } from '../models/property-model';
import { getNextCursorPageParam, queryTiming } from '@/shared/react-query';
import { getAgentPropertiesById } from '../services/property-service-client';

export function useGetAgentPropertiesById(id: string) {
  return useInfiniteQuery<
    ApiResponse<PropertyModel[]>,
    Error,
    InfiniteData<ApiResponse<PropertyModel[]>>,
    [string, string],
    NextCursorModel | undefined
  >({
    queryKey: ['agent-property', id],
    queryFn: ({ pageParam }) => getAgentPropertiesById(id, pageParam),
    initialPageParam: undefined,
    enabled: !!id,
    getNextPageParam: getNextCursorPageParam,
    ...queryTiming.list,
  });
}
