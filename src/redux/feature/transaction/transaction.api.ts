import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTransactions: builder.query({
      query: () => ({
        url: "/transaction",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
    transactionInfo: builder.query({
      query: () => ({
        url: "/transaction/me",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useAllTransactionsQuery, useTransactionInfoQuery } = walletApi;
