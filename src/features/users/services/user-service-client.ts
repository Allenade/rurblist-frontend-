'use client';

import { ApiResponse } from '@/shared/api/base-response';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { PropertyModel } from '@/features/properties/models/property-model';
import { currentUserModel } from '@/features/users/models/user-model';
import { getCurrentUserServer, getSavedPropertiesServer } from './user-services';

export async function getCurrentUser(): Promise<ApiResponse<currentUserModel>> {
  const res = await getCurrentUserServer();
  if (res.statusCode === 401) {
    return {
      data: null as never,
      message: 'Unauthenticated',
      statusCode: 401,
    };
  }
  if (res.error) {
    throw new Error(res.message);
  }

  return res;
}

export async function getSavedProperties(
  cursor?: NextCursorModel,
): Promise<ApiResponse<PropertyModel[]>> {
  const res = await getSavedPropertiesServer(cursor);
  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}
