'use server';

import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { PaymentDetailModel, PaymentModel } from '../../models/payment-model';

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
  propertyd: string,
  planId: string | undefined,
  enscrowFee: number,
  paymentMethod: string,
): Promise<ApiResponse<PaymentModel>> {
  const payload: {
    paymentMethod: string;
    enscrowFee: number;
    planId?: string;
  } = {
    paymentMethod,
    enscrowFee,
  };

  if (planId) {
    payload.planId = planId;
  }

  const response = await api.authPost<PaymentModel>(`/payments/property/${propertyd}`, payload);
  return response;
}

export async function getPaymentDeailsServer(
  reference: string,
): Promise<ApiResponse<PaymentDetailModel>> {
  const response = await api.authGet<PaymentDetailModel>(`/payments/reference/${reference}`);

  return response;
}

export async function downloadReciptServer(paymentId: string) {
  const response = await api.authGetDownload(`/payments/${paymentId}/receipt`);

  return response;
}

// export async function getTourByIdServer(id: string): Promise<ApiResponse<TourModel2>> {
//   const response = await api.authGet<TourModel2>(`/tours/${id}`);

//   return response;
// }
