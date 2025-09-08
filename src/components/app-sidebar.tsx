import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "@/assets/icons/Logo";
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/feature/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { ModeToggle } from "./mode-toggle";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/redux/hook";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);
  const location = useLocation();
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const handleLogout = async () => {
    const res = await logout(undefined);
    dispatch(authApi.util.resetApiState());
    navigate("/")
    console.log("res", res);
  };

  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="justify-between border-b">
        <Link to="/">
          <Logo />
        </Link>
        <ModeToggle />
      </SidebarHeader>

      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = location.pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={
                          isActive
                            ? "bg-primary text-white rounded-md"
                            : "hover:bg-primary-foreground rounded-md"
                        }
                      >
                        <Link to={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t">
        <Button
          className="ml-auto"
          onClick={handleLogout}
          variant="outline"
          size="icon"
        >
          <LogOut />
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
