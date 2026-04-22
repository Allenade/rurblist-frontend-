'use server';

import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { PropertyModel, PropertySearchParams } from '../../models/property-model';
import { currentUserModel } from '../../models/user-model';

export async function getMyPropertiesServer(): Promise<ApiResponse<PropertyModel[]>> {
  const res = await api.authGet<PropertyModel[]>('/property/my-properties');

  return res;
}

export async function getPropertyByIdServer(id: string): Promise<ApiResponse<PropertyModel>> {
  const res = await api.authGet<PropertyModel>(`/property/${id}`);

  return res;
}

export async function getAgentPropertiesByIdServer(
  id: string,
): Promise<ApiResponse<PropertyModel[]>> {
  const res = await api.authGet<PropertyModel[]>(`/property/agent-properties/${id}`);

  return res;
}

export async function uploadPropertyServer(
  formData: FormData,
): Promise<ApiResponse<PropertyModel>> {
  const res = await api.authPost<PropertyModel>('/property', formData);

  return res;
}

export async function verifyBuyerPropertyServer(
  formData: FormData,
  propertyId: string,
): Promise<ApiResponse<currentUserModel>> {
  const res = await api.authPost<currentUserModel>(
    `/property/${propertyId}/verify-buyer`,
    formData,
  );

  return res;
}

function buildQuery(params: PropertySearchParams): string {
  const query: string[] = [];

  if (params.search) query.push(`search=${params.search}`);

  if (params.type) query.push(`type=${params.type}`);

  if (params.status) query.push(`status=${params.status}`);

  if (params.minPrice) query.push(`minPrice=${params.minPrice}`);

  if (params.maxPrice) query.push(`maxPrice=${params.maxPrice}`);

  // ✅ NO ENCODING
  if (params.bedrooms) query.push(`bedrooms[gte]=${params.bedrooms}`);

  if (params.bathrooms) query.push(`bathrooms[gte]=${params.bathrooms}`);

  if (params.state) query.push(`location.state=${params.state}`);

  if (params.city) query.push(`location.city=${params.city}`);

  if (params.sort) query.push(`sort=${params.sort}`);

  if (params.page) query.push(`page=${params.page}`);

  if (params.limit) query.push(`limit=${params.limit}`);

  if (params.cursor) query.push(`cursor=${encodeURIComponent(params.cursor)}`); // ✅ important

  return query.join('&');
}

export async function searchPropertiesServer(
  params: PropertySearchParams,
): Promise<ApiResponse<PropertyModel[]>> {
  const query = buildQuery(params);
  console.log('🌐 API CALL:', `/property?${query}`);
  const res = await api.authGet<PropertyModel[]>(`/property?${query}`);

  return res;
}

export async function likePropertyServer(propertyId: string): Promise<ApiResponse<null>> {
  const res = await api.authPatch<null>(`/property/${propertyId}/like`, {});

  return res;
}

export async function unlikePropertyServer(propertyId: string): Promise<ApiResponse<null>> {
  const res = await api.authPatch<null>(`/property/${propertyId}/unlike`);

  return res;
}

export async function deletePropertyServer(propertyId: string): Promise<ApiResponse<null>> {
  const res = await api.authDelete<null>(`/property/${propertyId}`);

  return res;
}

export async function savePropertyServer(propertyId: string): Promise<ApiResponse<null>> {
  const res = await api.authPatch<null>(`/user/${propertyId}/save`, {});

  return res;
}

export async function unsavePropertyServer(propertyId: string): Promise<ApiResponse<null>> {
  const res = await api.authPatch<null>(`/user/${propertyId}/save`);

  return res;
}
