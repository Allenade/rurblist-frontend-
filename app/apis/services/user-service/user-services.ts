import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { PropertyModel } from '../../models/property-model';
import { currentUserModel } from '../../models/user-model';

export async function getCurrentUser(): Promise<ApiResponse<currentUserModel>> {
  const res = await api.authGet<currentUserModel>('/user/me');

  if (res.error) {
    throw new Error(res.message);
  }

  return res;
}

export async function getSavedProperties(): Promise<ApiResponse<PropertyModel[]>> {
  const res = await api.authGet<PropertyModel[]>('/user/saved');
  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}
