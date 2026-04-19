'use client';

import { ApiResponse } from '../../base-response';
import { BookInspectionPayload, TourModel, TourModel2 } from '../../models/tour-model';
import { bookInspectionServer, getTourByIdServer } from './tour-service';

export async function bookInspection(
  payload: BookInspectionPayload,
): Promise<ApiResponse<TourModel>> {
  const response = await bookInspectionServer(payload);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}

export async function getTourById(id: string): Promise<ApiResponse<TourModel2>> {
  const response = await getTourByIdServer(id);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}
