import ManageAgents from "@/pages/admin/ManageAgents";
import ManageUsers from "@/pages/admin/ManageUsers";
import Transactions from "@/pages/admin/Transactions";
import Wallets from "@/pages/admin/Wallets";
import DashboardProfile from "@/pages/DashboardProfile";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AdminAnalytics = lazy(() => import("@/pages/admin/AdminAnalytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: AdminAnalytics,
      },
      {
        title: "Transactions",
        url: "/admin/transactions",
        component: Transactions,
      },
      {
        title: "Wallets",
        url: "/admin/wallets",
        component: Wallets,
      },
    ],
  },
  {
    title: "Actions",
    items: [
      {
        title: "Manage Users",
        url: "/admin/manage-users",
        component: ManageUsers,
      },
      {
        title: "Manage Agents",
        url: "/admin/manage-agents",
        component: ManageAgents,
      },
    ],
  },
  {
    title: "Manage",
    items: [
      {
        title: "Profile",
        url: "/admin/profile",
        component: DashboardProfile,
      },
    ],
  },
];
