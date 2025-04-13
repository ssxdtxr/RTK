import { QueryParams } from "../../shared/api/types";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CreatePostDto {
  title: string;
  body: string;
  userId: number;
}

export interface UpdatePostDto extends Partial<CreatePostDto> {}

export interface GetPostsArgs {
  params?: QueryParams;
}

export interface GetPostByIdArgs {
  id: number;
}

export interface CreatePostArgs {
  body: CreatePostDto;
}

export interface UpdatePostArgs {
  id: number;
  body: UpdatePostDto;
}

export interface DeletePostArgs {
  id: number;
}
