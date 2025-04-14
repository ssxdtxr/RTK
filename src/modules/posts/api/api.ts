import { baseApi } from "../../../shared/api/api";
import { GetPostsArgs, Post } from "../types";

//injectEndpoints позволяет определить endpoints не в baseApi, а где-то извне (в данном случае в postsApi)

const postsApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getPosts: query<Post[], GetPostsArgs>({
      query: ({ params }) => ({
        url: "/posts",
        params,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetPostsQuery } = postsApi;
