'use server';
import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { PropertyModel } from '../../models/property-model';
import { currentUserModel } from '../../models/user-model';

export async function getCurrentUserServer(): Promise<ApiResponse<currentUserModel>> {
  const res = await api.authGet<currentUserModel>('/user/me');
  if (res.statusCode === 401) {
    return {
      data: null as never,
      message: 'Unauthenticated',
      statusCode: 401,
    };
  }

  return res;
}

export async function getSavedPropertiesServer(): Promise<ApiResponse<PropertyModel[]>> {
  const res = await api.authGet<PropertyModel[]>('/user/saved');

  return res;
}
