import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3100/" }),
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: "todos",
      providesTags: ['todo']
    }),

    createTodo: builder.mutation({
      query: (body) => ({
        url: "todos/",
        method: "POST",
        body,
      }),
      invalidatesTags: ['todo']
    }),

    getTodoById: builder.query({
      query: (id) => ({
        url: "todos/" + id,
      }),
    }),
  }),
});
