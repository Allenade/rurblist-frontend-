"use client";

import { ApiResponse } from "../../base-response";
import { getErrorMessage } from "../../errors";
import { LoginPayload, LoginResponse } from "../../models/login-model";
import { API_URL } from "../../utils/api-links";

const DEFAULT_TIMEOUT = 10000;

export async function Login(
  options?: { payload?: unknown }
): Promise<ApiResponse<LoginResponse>> {

  const { payload } = options || {};

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);

  try {

    const response = await fetch("http://localhost:6003/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      credentials: "include", // VERY IMPORTANT
      cache: "no-store",
      signal: controller.signal
    });

    clearTimeout(timeout);

    const parsed = await response.json();

    if (!response.ok) {
      return {
        error: parsed?.error ?? "Request failed",
        message:
          getErrorMessage(parsed) ??
          parsed?.message ??
          "Something went wrong",
        statusCode: response.status
      };
    }

    return {
      data: parsed.data,
      message: parsed?.message ?? "Success",
      statusCode: response.status
    };

  } catch (error) {

    console.error("REQUEST ERROR:", error);

    return {
      error: "Network Error",
      message: "Unable to connect to server",
      statusCode: 500
    };
  }
}


export async function login(data: LoginPayload): Promise<ApiResponse<LoginResponse>> {
  const res = await Login({payload: data});
  const token = res.data?.token;
  if (res.statusCode >= 400) {
    console.log(res.message)
    throw new Error(res.message);
  }
  console.log(token)
  if (!token) {
    throw new Error("Token missing from response");
  }

  return res;
}