import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Query = createApi({
  reducerPath: 'api',
  tagTypes: ['Task', 'Token'],

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    //Tasks API
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
    }),
    //Auth API
    login: builder.mutation({
      query: (body) => ({
        url: process.env.REACT_APP_AUTH_LOGIN,
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['Token']
    }),
    protected: builder.mutation({
      query: () => 'protected'
    }),
    refreshToken: builder.mutation({
      query: (accessToken) => ({
        url: process.env.REACT_APP_AUTH_REFRESH,
        method: 'POST',
        body: accessToken
      })
    })
  })
});

export const {
  useTaskQuery,
  useDeleteTaskMutation,
  useAddTaskMutation,
  useLoginMutation,
  useProtectedMutation,
  useRefreshTokenMutation
} = Query;
