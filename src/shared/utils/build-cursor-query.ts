import { NextCursorModel } from '@/shared/models/next-cursor-model';

export const DEFAULT_PAGE_LIMIT = 10;

export function buildCursorQuery(cursor?: NextCursorModel, limit = DEFAULT_PAGE_LIMIT) {
  const query = new URLSearchParams({
    limit: String(limit),
  });

  if (cursor) {
    query.set('cursor', JSON.stringify(cursor));
  }

  return `?${query.toString()}`;
}
