'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { confirmTour } from '../../services/tour-service/tour-service-client';

export function useConfirmTour() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: confirmTour,

    onSuccess: () => {
      toast.success('Tour confirmed');

      queryClient.invalidateQueries({
        queryKey: ['tour-agent'], // adjust if needed
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
