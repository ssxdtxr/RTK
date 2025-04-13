import { baseApi } from "../../shared/api/api";
import { ApiResponse } from "../../shared/api/types";
import { GetPostsArgs, Post } from "./types";

//injectEndpoints позволяет определить endpoints не в baseApi, а где-то извне (в данном случае в postsApi)

export const postsApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getPosts: query<ApiResponse<Post[]>, GetPostsArgs>({
      query: ({ params }) => ({
        url: "/posts",
        params,
      }),
    }),
  }),
  overrideExisting: true,
});
