export type ApiResponse<T> = {
  data?: T;
  message: string;
  statusCode: number;
  error?: string;
  success?:boolean;
  count?: number;
};

export type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";