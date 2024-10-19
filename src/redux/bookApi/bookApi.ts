import { baseApi } from "../api/baseApi";


const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: ({ search, topic, page, ids }) => {
        const params = new URLSearchParams();
        if (search) {
          params.append("search", search);
        }
        if (topic) {
          params.append("topic", topic);
        }
        if (page) {
          params.append("page", page);
        }
        if (ids) {
          params.append("ids", ids);
        }
        return {
          url: `/books`,
          method: "GET",
          params: params,
        };
      },
    }),
    getSingleBook: builder.query({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBooksQuery, useGetSingleBookQuery } = bookApi;