import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { cancelleTour } from '../../services/tour-service/tour-service-client';

export function useCancelTour() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelleTour,

    onSuccess: () => {
      toast.success('Tour cancelled');
      queryClient.invalidateQueries({ queryKey: ['tour-user'] });
      queryClient.invalidateQueries({ queryKey: ['tour-agent'] });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
