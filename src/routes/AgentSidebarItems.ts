import AgentAddMoney from "@/pages/agent/AgentAddMoney";
import AgentWithdrawMoney from "@/pages/agent/AgentWithdrawMoney";
import DashboardProfile from "@/pages/DashboardProfile";
import UserTransactions from "@/pages/UserTransactions";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AgentAnalytics = lazy(() => import("@/pages/agent/AgentAnalytics"));

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/agent/analytics",
        component: AgentAnalytics,
      },
      {
        title: "Transactions",
        url: "/agent/transactions",
        component: UserTransactions,
      },
    ],
  },
  {
    title: "Actions",
    items: [
      {
        title: "Add Money",
        url: "/agent/add-money",
        component: AgentAddMoney,
      },
      {
        title: "Withdraw Money",
        url: "/agent/withdraw-money",
        component: AgentWithdrawMoney,
      },
    ],
  },
  {
    title: "Manage",
    items: [
      {
        title: "Profile",
        url: "/agent/profile",
        component: DashboardProfile,
      },
    ],
  },
];
