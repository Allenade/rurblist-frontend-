'use server';

import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { CommentModel } from '../../models/comment-model';
import { NextCursorModel } from '../../models/nextconsor-model';

export async function getCommentsByPropertyId({
  propertyId,
  cursor,
}: {
  propertyId: string;
  cursor?: NextCursorModel;
}): Promise<ApiResponse<CommentModel[]> & { nextCursor?: NextCursorModel }> {
  const query = cursor ? `?cursor=${cursor.id}` : '';

  const res = await api.authGet<CommentModel[]>(`/property/${propertyId}/comments${query}`);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

// ✅ POST COMMENT (top-level)
export async function postComment({
  propertyId,
  text,
}: {
  propertyId: string;
  text: string;
}): Promise<ApiResponse<CommentModel>> {
  const res = await api.authPost<CommentModel>(`/property/${propertyId}/comment`, {
    text,
  });

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

// ✅ REPLY TO COMMENT
export async function replyToComment({
  parentCommentId,
  text,
}: {
  parentCommentId: string;
  text: string;
}): Promise<ApiResponse<CommentModel>> {
  const res = await api.authPost<CommentModel>(`/property/comment/${parentCommentId}/reply`, {
    text,
  });

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}
