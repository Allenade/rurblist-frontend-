'use server';
import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { CommentModel } from '../../models/comment-model';
import { NextCursorModel } from '../../models/nextconsor-model';

export async function getCommentsByPropertyIdServer({
  propertyId,
  cursor,
}: {
  propertyId: string;
  cursor?: NextCursorModel;
}): Promise<ApiResponse<CommentModel[]> & { nextCursor?: NextCursorModel }> {
  const query = cursor ? `?cursor=${cursor.id}` : '';

  const res = await api.authGet<CommentModel[]>(`/property/${propertyId}/comments${query}`);

  return res;
}

// ✅ POST COMMENT (top-level)
export async function postCommentServer({
  propertyId,
  text,
}: {
  propertyId: string;
  text: string;
}): Promise<ApiResponse<CommentModel>> {
  const res = await api.authPost<CommentModel>(`/property/${propertyId}/comment`, {
    text,
  });

  return res;
}

// ✅ REPLY TO COMMENT
export async function replyToCommentServer({
  parentCommentId,
  text,
}: {
  parentCommentId: string;
  text: string;
}): Promise<ApiResponse<CommentModel>> {
  const res = await api.authPost<CommentModel>(`/property/comment/${parentCommentId}/reply`, {
    text,
  });

  return res;
}
