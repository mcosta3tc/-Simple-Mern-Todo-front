import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/'
  }),
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => `task/`
    }),
    deleteTask: builder.query({
      query: (id) => ({
        url: `task/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const { useGetTaskQuery, useDeleteTaskMutation } = apiSlice;
