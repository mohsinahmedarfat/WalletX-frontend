import { baseApi } from "@/redux/baseApi";
import type { ITransaction } from "@/types";

interface ITransactionResponse {
  data: ITransaction[];
}

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTransactions: builder.query<ITransaction[], void>({
      query: () => ({
        url: "/transaction",
        method: "GET",
      }),
      transformResponse: (response: ITransactionResponse) => response.data,
      providesTags: ["TRANSACTION"],
    }),
    transactionInfo: builder.query<ITransaction[], void>({
      query: () => ({
        url: "/transaction/me",
        method: "GET",
      }),
      transformResponse: (response: ITransactionResponse) => response.data,
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const { useAllTransactionsQuery, useTransactionInfoQuery } = transactionApi;
