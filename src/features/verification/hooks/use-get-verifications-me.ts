'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/api/base-response';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { VerificationModel } from '@/features/verification/models/verification-model';
import { getNextCursorPageParam, queryTiming } from '@/shared/react-query';
import { getVerification } from '@/features/verification/services/verification-service-client';

export function useGetVerifications(enabled = true) {
  return useInfiniteQuery<
    ApiResponse<VerificationModel[]>,
    Error,
    InfiniteData<ApiResponse<VerificationModel[]>>,
    [string],
    NextCursorModel | undefined
  >({
    queryKey: ['verification-me'],
    queryFn: ({ pageParam }) => getVerification(pageParam),
    initialPageParam: undefined,
    enabled,
    getNextPageParam: getNextCursorPageParam,
    ...queryTiming.list,
  });
}
