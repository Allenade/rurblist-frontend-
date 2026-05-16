'use server';
import { ApiResponse } from '@/shared/api/base-response';
import { api } from '@/shared/api/call-apis';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { PropertyModel } from '@/features/properties/models/property-model';
import { currentUserModel } from '@/features/users/models/user-model';
import { buildCursorQuery } from '@/shared/utils/build-cursor-query';

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

export async function getSavedPropertiesServer(
  cursor?: NextCursorModel,
): Promise<ApiResponse<PropertyModel[]>> {
  const res = await api.authGet<PropertyModel[]>(`/user/saved${buildCursorQuery(cursor)}`);

  return res;
}
