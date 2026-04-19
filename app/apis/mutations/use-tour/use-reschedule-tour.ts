'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { rescheduleTour } from '../../services/tour-service/tour-service-client';

export function useRescheduleTour() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: rescheduleTour,

    onSuccess: () => {
      toast.success('Tour rescheduled');

      queryClient.invalidateQueries({
        queryKey: ['tour-agent'], // adjust if needed
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
