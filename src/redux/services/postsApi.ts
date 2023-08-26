import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "./types/Post";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:3000/" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPostsApi: builder.query<Post[], void>({
      query: () => ({
        url: `posts`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    createPostsApi: builder.mutation<Post, { title: string; body: string }>({
      query: ({ title, body }) => ({
        url: `posts`,
        method: "POST",
        body: {
          title,
          body,
        },
      }),
      invalidatesTags: ["Post"],
    }),
    updatePostsApi: builder.mutation<
      Post,
      { id: string; title: string; body: string }
    >({
      query: ({ id, title, body }) => ({
        url: `posts`,
        method: "PUT",
        body: {
          id,
          title,
          body,
        },
      }),
      invalidatesTags: ["Post"],
    }),
    deletePostsApi: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `posts`,
        method: "DELETE",
        body: {
          id,
        },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsApiQuery,
  useCreatePostsApiMutation,
  useUpdatePostsApiMutation,
  useDeletePostsApiMutation,
} = postsApi;
