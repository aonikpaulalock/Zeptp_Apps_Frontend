import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://gutendex.com"
});


// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000/api",
//   credentials: "include",
// });

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["books"],
  endpoints: () => ({}),
});
