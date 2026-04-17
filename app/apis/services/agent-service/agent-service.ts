'use server';

import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { AgentModel, CreateAgentPayload } from '../../models/agent-model';

export async function createAgent(payload: CreateAgentPayload): Promise<ApiResponse<AgentModel>> {
  const formData = new FormData();

  // 🔹 Append fields
  formData.append('firstName', payload.firstName);
  formData.append('lastName', payload.lastName);
  formData.append('dateOfBirth', payload.dateOfBirth);
  formData.append('city', payload.city);
  formData.append('address', payload.address);
  formData.append('nationality', payload.nationality);
  formData.append('nin', payload.nin);
  formData.append('companyName', payload.companyName);
  formData.append('yearsOfExperience', payload.yearsOfExperience.toString());
  formData.append('description', payload.description);
  formData.append('isAgreement', payload.isAgreement.toString());

  if (payload.cacNumber) {
    formData.append('cacNumber', payload.cacNumber);
  }

  // 🔹 Files (MUST match backend field names)
  formData.append('selfie', payload.selfie);
  formData.append('ninSlip', payload.ninSlip);

  if (payload.cacDoc) {
    formData.append('cacDoc', payload.cacDoc);
  }

  const res = await api.authPost<AgentModel>(
    '/agent',
    formData, // ✅ IMPORTANT (multipart)
  );

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function getAgentById(agentId: string): Promise<ApiResponse<AgentModel>> {
  const res = await api.authGet<AgentModel>(`/agent/userAgent/${agentId}`);
  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }
  return res;
}

export async function getCurrentAgent(): Promise<ApiResponse<AgentModel>> {
  const res = await api.authGet<AgentModel>('/agent/me');
  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function completeProfile(
  payload: CreateAgentPayload,
): Promise<ApiResponse<AgentModel>> {
  const formData = new FormData();

  // 🔹 Append fields
  formData.append('firstName', payload.firstName);
  formData.append('lastName', payload.lastName);
  formData.append('dateOfBirth', payload.dateOfBirth);
  formData.append('city', payload.city);
  formData.append('address', payload.address);
  formData.append('nationality', payload.nationality);
  formData.append('nin', payload.nin);
  formData.append('companyName', payload.companyName);
  formData.append('yearsOfExperience', payload.yearsOfExperience.toString());
  formData.append('description', payload.description);
  formData.append('isAgreement', payload.isAgreement.toString());

  if (payload.cacNumber) {
    formData.append('cacNumber', payload.cacNumber);
  }

  // 🔹 Files (MUST match backend field names)
  formData.append('selfie', payload.selfie);
  formData.append('ninSlip', payload.ninSlip);

  if (payload.cacDoc) {
    formData.append('cacDoc', payload.cacDoc);
  }

  const res = await api.authPatch<AgentModel>(
    '/agent/complete-profile',
    formData, // ✅ IMPORTANT (multipart)
  );

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}
