'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/api/base-response';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { PropertyModel } from '@/features/properties/models/property-model';
import { getNextCursorPageParam } from '@/shared/react-query/get-next-page-param';
import { queryTiming } from '@/shared/react-query/query-options';
import { getAgentPropertiesById } from '@/features/properties/services/property-service-client';

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
