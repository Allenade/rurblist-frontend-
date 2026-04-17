import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { BookInspectionPayload, TourModel, TourModel2 } from '../../models/tour-model';

export async function bookInspection(
  payload: BookInspectionPayload,
): Promise<ApiResponse<TourModel>> {
  const response = await api.authPost<TourModel>('/tours', payload);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}

export async function getTourById(id: string): Promise<ApiResponse<TourModel2>> {
  const response = await api.authGet<TourModel2>(`/tours/${id}`);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}
