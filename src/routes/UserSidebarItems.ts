import DashboardProfile from "@/pages/DashboardProfile";
import UserSendMoney from "@/pages/user/UserSendMoney";
import UserTransactions from "@/pages/UserTransactions";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const UserAnalytics = lazy(() => import("@/pages/user/UserAnalytics"));

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/user/analytics",
        component: UserAnalytics,
      },
      {
        title: "Transactions",
        url: "/user/transactions",
        component: UserTransactions,
      },
    ],
  },
  {
    title: "Actions",
    items: [
      {
        title: "Send Money",
        url: "/user/send-money",
        component: UserSendMoney,
      },
    ],
  },
  {
    title: "Manage",
    items: [
      {
        title: "Profile",
        url: "/user/profile",
        component: DashboardProfile,
      },
    ],
  },
];
