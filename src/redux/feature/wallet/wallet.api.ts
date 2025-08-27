import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    walletInfo: builder.query({
      query: () => ({
        url: "/wallet/me",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
    sendMoney: builder.mutation({
      query: ({ receiverEmail, amountData }) => ({
        url: `/wallet/send/${receiverEmail}`,
        method: "PATCH",
        data: amountData,
      }),
      invalidatesTags: ["TRANSACTION"],
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
