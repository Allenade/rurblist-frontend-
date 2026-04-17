import { NextCursorModel } from "./models/nextconsor-model";

export type ApiResponse<T> = {
  data?: T;
  message: string;
  statusCode: number;
  error?: string;
  success?:boolean;
  count?: number;
  nextCursor?:NextCursorModel
};

export type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";