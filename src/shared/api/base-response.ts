import { NextCursorModel } from '@/shared/models/next-cursor-model';

export type ApiErrorItem = {
  field?: string;
  message?: string;
  [key: string]: unknown;
};

export type ApiErrorPayload =
  | ApiErrorItem[]
  | Record<string, ApiErrorItem | string | string[] | undefined>;

export type ApiResponse<T> = {
  data?: T;
  message: string;
  statusCode: number;
  error?: string;
  errors?: ApiErrorItem[];
  status?: string;
  requestId?: string;
  success?: boolean;
  count?: number;
  code?: string;
  hasNextPage?: boolean;
  nextCursor?: NextCursorModel;
};

export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';

export type ErrorModel = ApiErrorItem;
