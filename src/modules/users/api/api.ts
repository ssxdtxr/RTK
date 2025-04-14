import { baseApi } from "../../../shared/api/api";
import { GetPostsArgs } from "../../posts/types";
import { User } from "../types";

const usersApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getUsers: query<User[], GetPostsArgs>({
      query: ({ params }) => ({
        url: "/users",
        params,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetUsersQuery } = usersApi;
