import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTransactions: builder.query({
      query: () => ({
        url: "/transaction",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      providesTags: ["TRANSACTION"],
    }),
    transactionInfo: builder.query({
      query: () => ({
        url: "/transaction/me",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const { useAllTransactionsQuery, useTransactionInfoQuery } = walletApi;
