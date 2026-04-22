'use client';

import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { payForProperty } from '../../services/payment-service/payment-service-client';

export const usePayForProperty = () => {
  return useMutation({
    mutationFn: ({
      propertyd,
      planId,
      enscrowFee,
      paymentMethod,
    }: {
      propertyd: string;
      planId?: string;
      enscrowFee: number;
      paymentMethod: string;
    }) => payForProperty(propertyd, planId, enscrowFee, paymentMethod),

    onSuccess: (data) => {
      toast.success(data.message || 'Payment initialized');

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
