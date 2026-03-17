"use server";

import { ApiResponse } from "../../base-response";
import { api } from "../../call-apis";
import { Property1 } from "../../models/property-model";

export async function getMyProperties(): Promise<ApiResponse<Property1[]>> {
  const res = await api.authGet<Property1[]>("/property/my-properties");

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function getPropertyById(
  id: string
): Promise<ApiResponse<Property1>> {

  const res = await api.authGet<Property1>(`/property/${id}`);
  
  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function getAgentPropertiesById(
  id: string
): Promise<ApiResponse<Property1[]>> {

  const res = await api.authGet<Property1[]>(`/property/agentProperties/${id}`);
  
  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function uploadProperty(
  formData: FormData
): Promise<ApiResponse<Property1>> {

  const res = await api.authPost<Property1>(
    "/property",
    formData
  );

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}