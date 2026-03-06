"use server";

import { cookies } from "next/headers";
import { ApiResponse, HttpMethod } from "./base-response";
import { getErrorMessage } from "./errors";
import { API_URL } from "./utils/api-links";


const AUTH_COOKIE = "auth_token";

const DEFAULT_TIMEOUT = 10000;

export async function request<T = unknown>(
  method: HttpMethod,
  path: string,
  options?: {
    payload?: unknown;
    protected?: boolean;
    retries?: number;
  }
): Promise<ApiResponse<T>> {
  const { payload, protected: protectedRoute, retries = 1 } = options || {};

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE)?.value;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (protectedRoute && token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const url = new URL(`/api${path}`, API_URL);

    const response = await fetch(url, {
      method,
      headers,
      body:
        method !== "GET" && payload
          ? JSON.stringify(payload)
          : undefined,
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const contentType = response.headers.get("content-type");

    let parsed: any = null;

    if (contentType?.includes("application/json")) {
      parsed = await response.json();
    }

    if (!response.ok || parsed?.error || parsed?.statusCode >= 400) {
      return {
        error: parsed?.error ?? "Request failed",
        message:
          getErrorMessage(parsed) ??
          parsed?.message ??
          "Something went wrong",
        statusCode: parsed?.statusCode ?? response.status,
      };
      
    }

    return {
      data: parsed,
      message: parsed?.message ?? "Success",
      statusCode: response.status,
    };
  } catch (error) {
    if (retries > 0) {
      return request(method, path, {
        payload,
        protected: protectedRoute,
        retries: retries - 1,
      });
    }

    return {
      error: "Network Error",
      message: "Unable to connect to server",
      statusCode: 500,
    };
  }
}