'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postComment, replyToComment } from '../../services/comment-service/comment-service';

export function useCommentMutation(propertyId: string) {
  const queryClient = useQueryClient();

  // ✅ POST COMMENT
  const postMutation = useMutation({
    mutationFn: (text: string) => postComment({ propertyId, text }),

    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['get-comments', propertyId],
      });
      await queryClient.invalidateQueries({
        queryKey: ['seaech-properties'],
      });
    },
  });

  // ✅ REPLY
  const replyMutation = useMutation({
    mutationFn: ({ parentCommentId, text }: { parentCommentId: string; text: string }) =>
      replyToComment({ parentCommentId, text }),

    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['get-comments', propertyId],
      });
      await queryClient.invalidateQueries({
        queryKey: ['seaech-properties'],
      });
    },
  });

  return {
    postComment: postMutation.mutate,
    replyComment: replyMutation.mutate,
    isPosting: postMutation.isPending,
    isReplying: replyMutation.isPending,
  };
}
