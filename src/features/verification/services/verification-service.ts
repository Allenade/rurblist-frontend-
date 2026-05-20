import { ApiResponse } from '@/shared/api/base-response';
import { api } from '@/shared/api/call-apis';
import { NextCursorModel } from '@/shared/models/next-cursor-model';
import { VerificationModel } from '../models/verification-model';
import { buildCursorQuery } from '@/shared/utils/build-cursor-query';

export async function getVerificationsServer(
  cursor?: NextCursorModel,
): Promise<ApiResponse<VerificationModel[]>> {
  const res = await api.authGet<VerificationModel[]>(
    `/verifications/me${buildCursorQuery(cursor)}`,
  );

  return res;
}

export async function getAllVerificationsServer(
  cursor?: NextCursorModel,
): Promise<ApiResponse<VerificationModel[]>> {
  const res = await api.authGet<VerificationModel[]>(`/verifications${buildCursorQuery(cursor)}`);

  return res;
}

export async function getVerificationByIdServer(
  id: string,
): Promise<ApiResponse<VerificationModel>> {
  const res = await api.authGet<VerificationModel>(`/verifications/${id}`);

  return res;
}
