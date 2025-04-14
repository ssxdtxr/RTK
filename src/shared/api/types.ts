export type QueryParams = {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: "asc" | "desc";
  [key: string]: unknown;
};
