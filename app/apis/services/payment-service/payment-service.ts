import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { PaymentDetailModel, PaymentModel } from '../../models/payment-model';

export async function payForTour(
  tourId: string,
  paymentMethod: string,
): Promise<ApiResponse<PaymentModel>> {
  const response = await api.authPost<PaymentModel>(`/payments/tour/${tourId}`, {
    paymentMethod,
  });

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}

export async function getPaymentDeails(
  reference: string,
): Promise<ApiResponse<PaymentDetailModel>> {
  const response = await api.authGet<PaymentDetailModel>(`/payments/reference/${reference}`);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}

// export async function getTourById(id: string): Promise<ApiResponse<TourModel2>> {
//   const response = await api.authGet<TourModel2>(`/tours/${id}`);

//   if (response.statusCode >= 400) {
//     throw new Error(response.message);
//   }
//   return response;
// }
