import DashboardProfile from "@/pages/DashboardProfile";
import UserDepositMoney from "@/pages/user/UserDepositMoney";
import UserSendMoney from "@/pages/user/UserSendMoney";
import UserTransactions from "@/pages/user/UserTransactions";
import UserWithdrawMoney from "@/pages/user/UserWithdrawMoney";
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
      {
        title: "Deposit Money",
        url: "/user/deposit-money",
        component: UserDepositMoney,
      },
      {
        title: "Withdraw Money",
        url: "/user/withdraw-money",
        component: UserWithdrawMoney,
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
