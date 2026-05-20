'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/api/base-response';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { PropertyModel } from '@/features/properties/models';
import { getNextCursorPageParam, queryTiming } from '@/shared/react-query';
import { getSavedProperties } from '../services/user-service-client';

export function useGetSavedProperties(enabled = true) {
  return useInfiniteQuery<
    ApiResponse<PropertyModel[]>,
    Error,
    InfiniteData<ApiResponse<PropertyModel[]>>,
    [string],
    NextCursorModel | undefined
  >({
    queryKey: ['saved-propertys'],
    queryFn: ({ pageParam }) => getSavedProperties(pageParam),
    initialPageParam: undefined,
    enabled,
    getNextPageParam: getNextCursorPageParam,
    ...queryTiming.list,
  });
}
