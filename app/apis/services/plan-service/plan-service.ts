import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { PlanModel } from '../../models/plan-model';

export async function getPlansServer(): Promise<ApiResponse<PlanModel[]>> {
  const res = await api.authGet<PlanModel[]>('/plans');

  return res;
}

export async function getPlanByIdServer(id: string): Promise<ApiResponse<PlanModel>> {
  const res = await api.authGet<PlanModel>(`/plans/${id}`);

  return res;
}
