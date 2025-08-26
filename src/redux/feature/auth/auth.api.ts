import { baseApi } from "@/redux/baseApi";
import type { IUser } from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        data: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    blockUser: builder.mutation({
      query: ({ userId, statusData }) => ({
        url: `/user/status/${userId}`,
        method: "PATCH",
        data: statusData,
      }),
      invalidatesTags: ["USERS"],
      async onQueryStarted(
        { userId, statusData },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          authApi.util.updateQueryData("allUsers", undefined, (draft) => {
            const user = draft.find((u: IUser) => u._id === userId);
            if (user) {
              user.isBlocked = statusData.isBlocked;
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
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
    allUsers: builder.query({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      providesTags: ["USERS"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useBlockUserMutation,
  useUserInfoQuery,
  useLogoutMutation,
  useAllUsersQuery,
} = authApi;
