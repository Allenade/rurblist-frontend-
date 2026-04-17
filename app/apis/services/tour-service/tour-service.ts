import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { BookInspectionPayload } from '../../models/tour-model';

export async function bookInspection(payload: BookInspectionPayload): Promise<ApiResponse<null>> {
  const response = await api.authPost<null>('/api/tours', payload);

  if (response.statusCode >= 400) {
    throw new Error(response.message);
  }
  return response;
}
