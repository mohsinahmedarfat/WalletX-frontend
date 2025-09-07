import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./AdminSidebarItems";
import { userSidebarItems } from "./UserSidebarItems";
import { agentSidebarItems } from "./AgentSidebarItems";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import Unauthorized from "@/pages/Unauthorized";
import Contact from "@/pages/Contact";
import Pricing from "@/pages/Pricing";
import Features from "@/pages/Features";
import Services from "@/pages/Services";
import BlogPost from "@/pages/BlogPost";
import Blogs from "@/pages/Blogs";
import Webinars from "@/pages/Webinars";
import CaseStudies from "@/pages/CaseStudies";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "pricing",
        Component: Pricing,
      },
      {
        path: "features",
        Component: Features,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "resources/blogs",
        Component: withAuth(Blogs),
      },
      {
        path: "resources/blog/:id",
        Component: withAuth(BlogPost),
      },
      {
        path: "resources/case-studies",
        Component: withAuth(CaseStudies),
      },
      {
        path: "resources/webinars",
        Component: withAuth(Webinars),
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.admin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.agent as TRole),
    path: "/agent",
    children: [
      { index: true, element: <Navigate to="/agent/analytics" /> },
      ...generateRoutes(agentSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: "/user",
    children: [
      { index: true, element: <Navigate to="/user/analytics" /> },
      ...generateRoutes(userSidebarItems),
    ],
  },

  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);

export default router;
