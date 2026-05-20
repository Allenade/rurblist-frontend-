'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/api/base-response';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { TourModel2 } from '../models/tour-model';
import { getNextCursorPageParam, queryTiming } from '@/shared/react-query';
import { getTourUser } from '../services/tour-service-client';

export function useGetTourUsers(enabled = true) {
  return useInfiniteQuery<
    ApiResponse<TourModel2[]>,
    Error,
    InfiniteData<ApiResponse<TourModel2[]>>,
    [string],
    NextCursorModel | undefined
  >({
    queryKey: ['tour-user'],
    queryFn: ({ pageParam }) => getTourUser(pageParam),
    initialPageParam: undefined,
    enabled,
    getNextPageParam: getNextCursorPageParam,
    ...queryTiming.list,
  });
}
