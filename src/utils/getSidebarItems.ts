import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/AdminSidebarItems";
import { agentSidebarItems } from "@/routes/AgentSidebarItems";
import { userSidebarItems } from "@/routes/UserSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [...adminSidebarItems];
    case role.agent:
      return [...agentSidebarItems];
    case role.user:
      return [...userSidebarItems];
    default:
      return [];
  }
};