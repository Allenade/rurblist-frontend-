import { ApiResponse } from '../../base-response';
import { PlanModel } from '../../models/plan-model';
import { getPlanByIdServer, getPlansServer } from './plan-service';

export async function getPlans(): Promise<ApiResponse<PlanModel[]>> {
  const res = await getPlansServer();

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function getPlanById(id: string): Promise<ApiResponse<PlanModel>> {
  const res = await getPlanByIdServer(id);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}
