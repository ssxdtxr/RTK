import { createBrowserRouter, redirect } from "react-router-dom";
import { PostsList } from "../modules/posts/posts-list";
import { UsersList } from "../modules/users/users-list";
import { MainLayout } from "../shared/ui/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => redirect("/posts"),
      },
      {
        path: "posts",
        element: <PostsList />,
      },
      {
        path: "users",
        element: <UsersList />,
      },
    ],
  },
]);
