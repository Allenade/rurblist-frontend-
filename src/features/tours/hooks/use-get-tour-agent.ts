'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/api/base-response';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { TourModel2 } from '@/features/tours/models/tour-model';
import { getNextCursorPageParam, queryTiming } from '@/shared/react-query';
import { getTourAgent } from '@/features/tours/services/tour-service-client';

export function useGetTourAgents(enabled = true) {
  return useInfiniteQuery<
    ApiResponse<TourModel2[]>,
    Error,
    InfiniteData<ApiResponse<TourModel2[]>>,
    [string],
    NextCursorModel | undefined
  >({
    queryKey: ['tour-agent'],
    queryFn: ({ pageParam }) => getTourAgent(pageParam),
    initialPageParam: undefined,
    enabled,
    getNextPageParam: getNextCursorPageParam,
    ...queryTiming.list,
  });
}
