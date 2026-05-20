'use client';

import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { payForProperty } from '../services/payment-service-client';

export const usePayForProperty = () => {
  return useMutation({
    mutationFn: ({
      propertyId,
      planId,
      escrowFee,
      paymentMethod,
    }: {
      propertyId: string;
      planId?: string;
      escrowFee: number;
      paymentMethod: string;
    }) => payForProperty(propertyId, planId, escrowFee, paymentMethod),

    onSuccess: (data) => {
      toast.success(data.message || 'Payment initialized');

      const url = data?.data?.authorization_url;

      if (url) {
        window.location.href = url;
      }
    },

    onError: (error: Error) => {
      toast.error(error.message || 'Payment failed');
    },
  });
};
