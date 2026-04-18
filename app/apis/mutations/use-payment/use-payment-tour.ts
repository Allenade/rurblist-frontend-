'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { payForTour } from '../../services/payment-service/payment-service';

export const usePayForTour = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ tourId, paymentMethod }: { tourId: string; paymentMethod: string }) =>
      payForTour(tourId, paymentMethod),

    onSuccess: (data) => {
      toast.success(data.message || 'Payment initialized');

      // 🔥 invalidate relevant queries
      //   queryClient.invalidateQueries({ queryKey: ['tours'] });
      //   queryClient.invalidateQueries({ queryKey: ['payments'] });
      const url = data?.data?.authorization_url;

      if (url) {
        window.location.href = url; // ✅ same tab
      }
    },

    onError: (error: Error) => {
      toast.error(error.message || 'Payment failed');
    },
  });
};
