'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BookInspectionPayload } from '../../models/tour-model';
import { bookInspection } from '../../services/tour-service/tour-service';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export const useBookInspection = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: BookInspectionPayload) => bookInspection(payload),

    onSuccess: (data) => {
      const tourId = data?.data?._id;

      if (!tourId) {
        toast.error('Failed to get tour ID');
        return;
      }
      toast.success(data.message);
      // 🔥 invalidate anything related to tours / bookings
      queryClient.invalidateQueries({ queryKey: ['tours'] });
      queryClient.invalidateQueries({ queryKey: ['property'] });

      // 👉 redirect to payment
      router.push(`/payment-tour?tourId=${tourId}`);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
