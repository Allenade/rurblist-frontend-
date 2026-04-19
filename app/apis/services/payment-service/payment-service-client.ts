'use client';

import { ApiResponse } from '../../base-response';
import { PaymentDetailModel, PaymentModel } from '../../models/payment-model';
import { getPaymentDeailsServer, payForTourServer } from './payment-service';

export async function payForTour(
  tourId: string,
  paymentMethod: string,
): Promise<ApiResponse<PaymentModel>> {
  const response = await payForTourServer(tourId, paymentMethod);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}

export async function getPaymentDeails(
  reference: string,
): Promise<ApiResponse<PaymentDetailModel>> {
  const response = await getPaymentDeailsServer(reference);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}

/*
export async function getTourById(id: string): Promise<ApiResponse<TourModel2>> {
  const response = getTourByIdServer(id);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}
*/
