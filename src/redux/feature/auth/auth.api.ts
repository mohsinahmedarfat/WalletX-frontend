import { baseApi } from "@/redux/baseApi";

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
      transformResponse: (response) => response.data
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useUserInfoQuery,
  useLogoutMutation,
  useAllUsersQuery
} = authApi;
