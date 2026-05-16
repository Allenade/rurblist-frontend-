import { ApiResponse } from '@/shared/api/base-response';
import { api } from '@/shared/api/call-apis';
import { PlanModel } from '@/features/plans/models/plan-model';

export async function getPlansServer(): Promise<ApiResponse<PlanModel[]>> {
  const res = await api.authGet<PlanModel[]>('/plans');

  return res;
}

export async function getPlanByIdServer(id: string): Promise<ApiResponse<PlanModel>> {
  const res = await api.authGet<PlanModel>(`/plans/${id}`);

  return res;
}
