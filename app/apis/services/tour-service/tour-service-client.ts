'use client';

import { ApiResponse } from '../../base-response';
import { BookInspectionPayload, TourModel, TourModel2 } from '../../models/tour-model';
import {
  bookInspectionServer,
  cancelleTourServer,
  getTourAgentServer,
  getTourByIdServer,
  getTourUserServer,
} from './tour-service';

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

export async function getTourAgent(): Promise<ApiResponse<TourModel2[]>> {
  const response = await getTourAgentServer();

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}

export async function getTourUser(): Promise<ApiResponse<TourModel2[]>> {
  const response = await getTourUserServer();

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}

export async function cancelleTour(tourId: string): Promise<ApiResponse<null>> {
  const response = await cancelleTourServer(tourId);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}
