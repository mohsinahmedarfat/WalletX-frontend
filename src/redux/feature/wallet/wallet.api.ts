import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allWallets: builder.query({
      query: () => ({
        url: "/wallet",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      providesTags: ["WALLET"],
    }),
    walletInfo: builder.query({
      query: () => ({
        url: "/wallet/me",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      providesTags: ["WALLET"],
    }),
    sendMoney: builder.mutation({
      query: ({ receiverEmail, amountData }) => ({
        url: `/wallet/send/${receiverEmail}`,
        method: "PATCH",
        data: amountData,
      }),
      invalidatesTags: ["TRANSACTION", "WALLET"],
    }),
    addMoney: builder.mutation({
      query: ({ userEmail, amountData }) => ({
        url: `/wallet/top-up/${userEmail}`,
        method: "PATCH",
        data: amountData,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    withdrawMoney: builder.mutation({
      query: ({ userEmail, amountData }) => ({
        url: `/wallet/withdraw/${userEmail}`,
        method: "PATCH",
        data: amountData,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
  }),
});

export const {
  useWalletInfoQuery,
  useSendMoneyMutation,
  useAddMoneyMutation,
  useWithdrawMoneyMutation,
} = walletApi;
