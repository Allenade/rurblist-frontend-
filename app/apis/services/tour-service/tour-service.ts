'use server';

import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { BookInspectionPayload, TourModel, TourModel2 } from '../../models/tour-model';

export async function bookInspectionServer(
  payload: BookInspectionPayload,
): Promise<ApiResponse<TourModel>> {
  const response = await api.authPost<TourModel>('/tours', payload);

  return response;
}

export async function getTourByIdServer(id: string): Promise<ApiResponse<TourModel2>> {
  const response = await api.authGet<TourModel2>(`/tours/${id}`);

  return response;
}
