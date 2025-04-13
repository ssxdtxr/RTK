import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//fetchBaseQuery по сути axios

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }), // определяет то, каким образхои api будет делать запросы (RTK предоставляет fetchBaseQuery и fakeBaseQuery)
  endpoints: () => ({}),
});
