'use client';

import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { verifyBuyerProperty } from '../../services/property-service/property-service-clientt';

export function useVerifyBuyerProperty() {
  return useMutation({
    mutationFn: ({ data, propertyId }: { data: FormData; propertyId: string }) =>
      verifyBuyerProperty(data, propertyId),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
