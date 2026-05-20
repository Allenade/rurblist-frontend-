'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/api/base-response';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { PropertyModel, PropertySearchParams } from '../models/property-model';
import { getNextCursorPageParam, queryTiming } from '@/shared/react-query';
import { searchProperties } from '../services/property-service-client';

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
