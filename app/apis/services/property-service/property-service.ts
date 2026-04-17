'use server';

import { ApiResponse } from '../../base-response';
import { api } from '../../call-apis';
import { Property1, PropertySearchParams } from '../../models/property-model';

export async function getMyProperties(): Promise<ApiResponse<Property1[]>> {
  const res = await api.authGet<Property1[]>('/property/my-properties');

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function getPropertyById(id: string): Promise<ApiResponse<Property1>> {
  const res = await api.authGet<Property1>(`/property/${id}`);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function getAgentPropertiesById(id: string): Promise<ApiResponse<Property1[]>> {
  const res = await api.authGet<Property1[]>(`/property/agent-properties/${id}`);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function uploadProperty(formData: FormData): Promise<ApiResponse<Property1>> {
  const res = await api.authPost<Property1>('/property', formData);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

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

export async function searchProperties(
  params: PropertySearchParams,
): Promise<ApiResponse<Property1[]>> {
  const query = buildQuery(params);
  console.log('🌐 API CALL:', `/property?${query}`);
  const res = await api.authGet<Property1[]>(`/property?${query}`);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function likeProperty(propertyId: string): Promise<ApiResponse<null>> {
  const res = await api.authPatch<null>(`/property/${propertyId}/like`, {});

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function unlikeProperty(propertyId: string): Promise<ApiResponse<null>> {
  const res = await api.authPatch<null>(`/property/${propertyId}/unlike`);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function deleteProperty(propertyId: string): Promise<ApiResponse<null>> {
  const res = await api.authDelete<null>(`/property/${propertyId}`);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function saveProperty(propertyId: string): Promise<ApiResponse<null>> {
  const res = await api.authPatch<null>(`/user/${propertyId}/save`, {});

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}

export async function unsaveProperty(propertyId: string): Promise<ApiResponse<null>> {
  const res = await api.authPatch<null>(`/user/${propertyId}/save`);

  if (res.statusCode >= 400) {
    throw new Error(res.message);
  }

  return res;
}
