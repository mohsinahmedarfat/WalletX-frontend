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
    // AgentAddMoney compo -> form: email, amount -> userDB: email => userId
    addMoney: builder.mutation({
      query: ({userId, walletData}) => ({
        url: `/wallet/top-up/${userId}`,
        method: "PATCH",
        data: walletData,
      }),
    }),
  }),
});

export const {
    useWalletInfoQuery,
    useAddMoneyMutation
} = walletApi;
