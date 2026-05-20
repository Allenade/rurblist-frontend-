'use client';

import { ApiResponse } from '@/shared/api/base-response';
import { PaymentDetailModel, PaymentModel } from '../models/payment-model';
import {
  downloadReceiptServer,
  getPaymentDetailsServer,
  payForPropertyServer,
  payForTourServer,
} from './payment-service';

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

export async function payForProperty(
  propertyId: string,
  planId: string | undefined,
  escrowFee: number,
  paymentMethod: string,
): Promise<ApiResponse<PaymentModel>> {
  const response = await payForPropertyServer(propertyId, planId, escrowFee, paymentMethod);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}

export async function getPaymentDetails(
  reference: string,
): Promise<ApiResponse<PaymentDetailModel>> {
  const response = await getPaymentDetailsServer(reference);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}

export async function downloadReceipt(paymentId: string) {
  const { blob, headers } = await downloadReceiptServer(paymentId);

  const url = window.URL.createObjectURL(blob);

  const contentDisposition = headers['content-disposition'];

  const fileNameMatch = contentDisposition?.match(/filename="?(.+)"?/);
  const fileName = fileNameMatch?.[1] || `receipt-${paymentId}.pdf`;

  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;

  document.body.appendChild(a);
  a.click();
  a.remove();

  window.URL.revokeObjectURL(url);
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
