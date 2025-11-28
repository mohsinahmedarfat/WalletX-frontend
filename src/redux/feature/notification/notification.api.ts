import { baseApi } from "@/redux/baseApi";
import type { INotification } from "@/types";

interface INotificationResponse {
  data: INotification[];
}

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allNotifications: builder.query<INotification[], void>({
      query: () => ({
        url: "/notification",
        method: "GET",
      }),
      transformResponse: (response: INotificationResponse) => response.data,
      providesTags: ["NOTIFICATION"],
    }),
    notificationInfo: builder.query<INotification[], void>({
      query: () => ({
        url: "/notification/me",
        method: "GET",
      }),
      transformResponse: (response: INotificationResponse) => response.data,
      providesTags: ["NOTIFICATION"],
    }),
  }),
});

export const { useAllNotificationsQuery, useNotificationInfoQuery } = notificationApi;
