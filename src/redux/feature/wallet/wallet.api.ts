import { baseApi } from "@/redux/baseApi";
import type { IWallet } from "@/types";

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
    blockWallet: builder.mutation({
      query: ({ userId, statusData }) => ({
        url: `/wallet/status/${userId}`,
        method: "PATCH",
        data: statusData,
      }),
      invalidatesTags: ["WALLET"],
      async onQueryStarted(
        { userId, statusData },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          walletApi.util.updateQueryData("allWallets", undefined, (draft) => {
            const wallet = draft.find((w: IWallet) => w.user._id === userId);
            if (wallet) {
              wallet.status = statusData.status;
            }
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    // blockUser: builder.mutation({
    //   query: ({ userId, statusData }) => ({
    //     url: `/user/status/${userId}`,
    //     method: "PATCH",
    //     data: statusData,
    //   }),
    //   invalidatesTags: ["USERS"],
    //   async onQueryStarted(
    //     { userId, statusData },
    //     { dispatch, queryFulfilled }
    //   ) {
    //     const patchResult = dispatch(
    //       authApi.util.updateQueryData("allUsers", undefined, (draft) => {
    //         const user = draft.find((u: IUser) => u._id === userId);
    //         if (user) {
    //           user.isBlocked = statusData.isBlocked;
    //         }
    //       })
    //     );

    //     try {
    //       await queryFulfilled;
    //     } catch {
    //       patchResult.undo();
    //     }
    //   },
    // }),
  }),
});

export const {
  useAllWalletsQuery,
  useWalletInfoQuery,
  useSendMoneyMutation,
  useAddMoneyMutation,
  useWithdrawMoneyMutation,
  useBlockWalletMutation,
} = walletApi;
