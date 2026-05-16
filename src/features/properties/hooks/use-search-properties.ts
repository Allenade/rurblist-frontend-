'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/api/base-response';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { PropertyModel, PropertySearchParams } from '@/features/properties/models/property-model';
import { getNextCursorPageParam } from '@/shared/react-query/get-next-page-param';
import { queryTiming } from '@/shared/react-query/query-options';
import { searchProperties } from '@/features/properties/services/property-service-client';

export function useSearchProperties(params: PropertySearchParams) {
  return useInfiniteQuery<
    ApiResponse<PropertyModel[]>,
    Error,
    InfiniteData<ApiResponse<PropertyModel[]>>,
    [string, PropertySearchParams],
    NextCursorModel | undefined
  >({
    queryKey: ['search-properties', params],
    queryFn: ({ pageParam }) =>
      searchProperties({
        ...params,
        cursor: pageParam ? JSON.stringify(pageParam) : undefined,
      }),

    initialPageParam: undefined,

    getNextPageParam: getNextCursorPageParam,

    ...queryTiming.list,
  });
}
