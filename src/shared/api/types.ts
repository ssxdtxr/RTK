export interface ApiError {
  status: number;
  data?: unknown;
  message?: string;
}

export type ApiResponse<T> =
  | {
      data: T;
      error?: never;
    }
  | {
      data?: never;
      error: ApiError;
    };

export type QueryParams = {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: "asc" | "desc";
  [key: string]: unknown;
};
