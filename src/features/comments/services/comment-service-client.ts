'use client';

import { ApiResponse } from '@/shared/api/base-response';
import { CommentModel } from '@/features/comments/models/comment-model';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import {
  getCommentsByPropertyIdServer,
  postCommentServer,
  replyToCommentServer,
} from './comment-service';

export async function getCommentsByPropertyId({
  propertyId,
  cursor,
}: {
  propertyId: string;
  cursor?: NextCursorModel;
}): Promise<ApiResponse<CommentModel[]> & { nextCursor?: NextCursorModel }> {
  const res = await getCommentsByPropertyIdServer({ propertyId, cursor });

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
  const res = await postCommentServer({ propertyId, text });

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
  const res = await replyToCommentServer({ parentCommentId, text });

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}
