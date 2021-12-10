import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const TaskSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Task'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL
  }),
  endpoints: (builder) => ({
    task: builder.query({
      query: () => process.env.REACT_APP_TASKS,
      providesTags: ['Task']
    }),
    addTask: builder.mutation({
      query: (body) => ({
        url: process.env.REACT_APP_TASKS,
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['Task']
    }),
    deleteTask: builder.mutation({
      query(_id) {
        return {
          url: process.env.REACT_APP_TASKS + `${_id}`,
          method: 'DELETE'
        };
      },
      invalidatesTags: ['Task']
    })
  })
});

export const { useTaskQuery, useDeleteTaskMutation, useAddTaskMutation } = TaskSlice;
