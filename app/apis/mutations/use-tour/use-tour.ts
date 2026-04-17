'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BookInspectionPayload } from '../../models/tour-model';
import { bookInspection } from '../../services/tour-service/tour-service';
import toast from 'react-hot-toast';

export const useBookInspection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: BookInspectionPayload) => bookInspection(payload),

    onSuccess: (data) => {
      toast.success(data.message);
      // 🔥 invalidate anything related to tours / bookings
      queryClient.invalidateQueries({ queryKey: ['tours'] });
      queryClient.invalidateQueries({ queryKey: ['property'] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
