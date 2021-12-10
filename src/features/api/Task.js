import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Task'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/'
  }),
  endpoints: (builder) => ({
    task: builder.query({
      query: () => `/task/`,
      providesTags: ['Task']
    }),
    addTask: builder.mutation({
      query: (body) => ({
        url: '/task/',
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['Task']
    }),
    deleteTask: builder.mutation({
      query(_id) {
        return {
          url: `/task/${_id}`,
          method: 'DELETE'
        };
      },
      invalidatesTags: ['Task']
    })
  })
});

export const { useTaskQuery, useDeleteTaskMutation, useAddTaskMutation } = apiSlice;
