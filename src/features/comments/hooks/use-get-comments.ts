'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/api/base-response';
import { CommentModel } from '@/features/comments/models/comment-model';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { getNextCursorPageParam } from '@/shared/react-query';
import { getCommentsByPropertyId } from '@/features/comments/services/comment-service-client';

export function usePropertyComments(propertyId: string) {
  return useInfiniteQuery<
    ApiResponse<CommentModel[]>, // response
    Error, // error
    InfiniteData<ApiResponse<CommentModel[]>>, // data select
    [string, string], // query key
    NextCursorModel | undefined // pageParam
  >({
    queryKey: ['get-comments', propertyId],

    queryFn: ({ pageParam }) => {
      return getCommentsByPropertyId({ propertyId, cursor: pageParam });
    },

    initialPageParam: undefined,

    getNextPageParam: getNextCursorPageParam,
    // ✅ v5 replacement for keepPreviousData
    // placeholderData: (previousData) => previousData,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true, // ✅ IMPORTANT
    refetchOnWindowFocus: false, // optional
  });
}
