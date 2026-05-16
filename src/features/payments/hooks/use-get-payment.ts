'use client';

import { useQuery } from '@tanstack/react-query';
import { queryTiming } from '@/shared/react-query/query-options';
import { getPaymentDetails } from '@/features/payments/services/payment-service-client';

export function useGetPaymentDetails(reference?: string) {
  return useQuery({
    queryKey: ['payment-details', reference],
    queryFn: () => getPaymentDetails(reference!),
    enabled: !!reference,
    ...queryTiming.detail,
  });
}
