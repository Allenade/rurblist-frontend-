'use client';

import { useMutation } from '@tanstack/react-query';
import { downloadReceipt } from '../../services/payment-service/payment-service-client';
import toast from 'react-hot-toast';

export function useDownloadReceipt() {
  return useMutation({
    mutationFn: downloadReceipt,

    onSuccess: () => {
      toast.success('Receipt downloaded');
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
