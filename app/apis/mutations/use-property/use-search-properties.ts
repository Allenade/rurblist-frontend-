"use client";

import { InfiniteData, useInfiniteQuery, } from "@tanstack/react-query";
import { Property1, PropertySearchParams } from "../../models/property-model";
import { searchProperties } from "../../services/property-service/property-service";
import { ApiResponse } from "../../base-response";
import { NextCursorModel } from "../../models/nextconsor-model";

export function useSearchProperties(params: PropertySearchParams) {
  return useInfiniteQuery<
   ApiResponse<Property1[]>, // response
    Error,                    // error
    InfiniteData< ApiResponse<Property1[]>>, // data select
    [string, PropertySearchParams], // query key
    NextCursorModel | undefined     // pageParam
  >({
    queryKey: ["seaech-properties", params],
     queryFn: ({ pageParam }) =>
      searchProperties({
        ...params,
        cursor: pageParam
          ? JSON.stringify(pageParam.id) // ✅ encode object
          : undefined,
      }),

    initialPageParam: undefined,

    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
       // ✅ v5 replacement for keepPreviousData
    placeholderData: (previousData) => previousData,
  });
}