import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["Profile", "Users"],

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1", // change if needed

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    getProfile: builder.query({
      query: () => "/profile",
      providesTags: ["Profile"],
    }),

    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetProfileQuery ,useGetUsersQuery} =
  authApi;