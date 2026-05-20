'use server';

import { ApiResponse } from '@/shared/api/base-response';
import { api } from '@/shared/api/call-apis';
import { PaymentDetailModel, PaymentModel } from '../models/payment-model';

export async function payForTourServer(
  tourId: string,
  paymentMethod: string,
): Promise<ApiResponse<PaymentModel>> {
  const response = await api.authPost<PaymentModel>(`/payments/tour/${tourId}`, {
    paymentMethod,
  });

  return response;
}

export async function payForPropertyServer(
  propertyId: string,
  planId: string | undefined,
  escrowFee: number,
  paymentMethod: string,
): Promise<ApiResponse<PaymentModel>> {
  const payload: {
    paymentMethod: string;
    enscrowFee: number;
    planId?: string;
  } = {
    paymentMethod,
    enscrowFee: escrowFee,
  };

  if (planId) {
    payload.planId = planId;
  }

  const response = await api.authPost<PaymentModel>(`/payments/property/${propertyId}`, payload);
  return response;
}

export async function getPaymentDetailsServer(
  reference: string,
): Promise<ApiResponse<PaymentDetailModel>> {
  const response = await api.authGet<PaymentDetailModel>(`/payments/reference/${reference}`);

  return response;
}

export async function downloadReceiptServer(paymentId: string) {
  const response = await api.authGetDownload(`/payments/${paymentId}/receipt`);

  return response;
}

// export async function getTourByIdServer(id: string): Promise<ApiResponse<TourModel2>> {
//   const response = await api.authGet<TourModel2>(`/tours/${id}`);

//   return response;
// }
