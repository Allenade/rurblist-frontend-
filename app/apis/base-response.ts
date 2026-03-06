export type ApiResponse<T> = {
  data?: T;
  message: string;
  statusCode: number;
  error?: string;
  success?:boolean;
};

export type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";