import { ApiResponse } from '@/shared/api/base-response';

export function getNextCursorPageParam<T>(lastPage: ApiResponse<T>) {
  if (!lastPage.hasNextPage) return undefined;

  return lastPage.nextCursor ?? undefined;
}
