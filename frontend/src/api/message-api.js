// http://localhost:5000/api/v1/get_message/696244e38b330eb3b97aed75


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "message_Api",
  tagTypes: ["message-tag"],
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
    sendMessage: builder.mutation({
      query: ({ message, id }) => ({
        url: `/send_message/${id}`,
        method: "POST",
        body: message,
      }),
      invalidatesTags: ["message-tag"],
    }),

    getMessages: builder.query({
      query: ({id}) => ({
        url: `/get_message/${id}`,
      }),
      invalidatesTags: ["message-tag"],
    }),

  }),
});

export const {useGetMessagesQuery,useSendMessageMutation } =
  messageApi;