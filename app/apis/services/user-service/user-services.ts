import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { Property1 } from '../../models/property-model';
import { UserModel } from '../../models/user-model';

export async function getCurrentUser(): Promise<ApiResponse<UserModel>> {
  const res = await api.authGet<UserModel>('/user/me');

  if (res.error) {
    throw new Error(res.message);
  }

  return res;
}

export async function getSavedProperties(): Promise<ApiResponse<Property1[]>> {
  const res = await api.authGet<Property1[]>('/user/saved');
  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}
