import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["auth-tag"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1", // change if needed

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;
      console.log("getState", getState());
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
      invalidatesTags: ["auth-tag"],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth-tag"],
    }),

    getProfile: builder.query({
      query: () => "/profile",
      providesTags: ["auth-tag"],
    }),

    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["auth-tag"],
    }),

  }),
});

export const { useRegisterMutation, useLoginMutation, useGetProfileQuery ,useGetUsersQuery} =
  authApi;