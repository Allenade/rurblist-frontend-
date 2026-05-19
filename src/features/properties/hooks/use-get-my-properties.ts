'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/api/base-response';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { PropertyModel } from '@/features/properties/models/property-model';
import { getNextCursorPageParam } from '@/shared/react-query/get-next-page-param';
import { queryTiming } from '@/shared/react-query/query-options';
import { getMyProperties } from '@/features/properties/services/property-service-client';

export function useGetMyProperties(enabled = true) {
  return useInfiniteQuery<
    ApiResponse<PropertyModel[]>,
    Error,
    InfiniteData<ApiResponse<PropertyModel[]>>,
    [string],
    NextCursorModel | undefined
  >({
    queryKey: ['my-properties'],
    queryFn: ({ pageParam }) => getMyProperties(pageParam),
    initialPageParam: undefined,
    enabled,
    getNextPageParam: getNextCursorPageParam,
    ...queryTiming.list,
  });
}
