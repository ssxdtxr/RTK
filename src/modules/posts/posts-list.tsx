import { useGetPostsQuery } from "./api/api";

export const PostsList = () => {
  const { data: posts } = useGetPostsQuery({});
  console.log(posts);
  return <div>PostsList</div>;
};
