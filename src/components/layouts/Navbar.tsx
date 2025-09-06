import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { role } from "@/constants/role";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/feature/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Link, useLocation } from "react-router";

// Navigation links (6+)
const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/pricing", label: "Pricing", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/services", label: "Services", role: "PUBLIC" },
  { href: "/blogs", label: "Blogs", role: "PUBLIC" },

  // Role-based dashboard routes
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/agent", label: "Dashboard", role: role.agent },
  { href: "/user", label: "Dashboard", role: role.user },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    const res = await logout(undefined);
    dispatch(authApi.util.resetApiState());
    console.log("res", res);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b px-4 md:px-6">
      <div className="flex h-16 justify-between gap-4">
        {/* Left side */}
        <div className="flex gap-2">
          <div className="flex items-center md:hidden">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button className="group size-8" variant="ghost" size="icon">
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-48 p-2 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-1 md:gap-2">
                    {navigationLinks.map((link) => {
                      if (
                        link.role !== "PUBLIC" &&
                        link.role !== data?.data?.role
                      )
                        return null;

                      return (
                        <NavigationMenuItem key={link.href} className="w-full">
                          <NavigationMenuLink
                            asChild
                            active={pathname === link.href}
                            className="py-1.5"
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    })}

                    {/* Mobile Solutions Mega Menu simplified */}
                    <div className="border-t pt-2 mt-2">
                      <p className="font-semibold mb-1">Solutions</p>
                      <Link to="/solutions/security" className="block py-1">
                        🔒 Security
                      </Link>
                      <Link to="/solutions/payments" className="block py-1">
                        💳 Payments
                      </Link>
                      <Link to="/solutions/transfers" className="block py-1">
                        🌍 Transfers
                      </Link>
                      <Link to="/solutions/business" className="block py-1">
                        👨‍💼 Business
                      </Link>
                      <Link to="/solutions/analytics" className="block py-1">
                        📊 Analytics
                      </Link>
                    </div>
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>

          {/* Main nav desktop */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
            <NavigationMenu className="h-full *:h-full max-md:hidden">
              <NavigationMenuList className="h-full gap-2">
                {navigationLinks.map((link) => {
                  if (link.role !== "PUBLIC" && link.role !== data?.data?.role)
                    return null;

                  return (
                    <NavigationMenuItem key={link.href} className="w-full">
                      <NavigationMenuLink
                        active={pathname === link.href}
                        asChild
                        className="text-muted-foreground hover:text-primary border-b-primary hover:border-b-primary data-[active]:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent!"
                      >
                        <Link to={link.href}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}

                {/* Solutions Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-primary border-b-primary hover:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background shadow-md rounded-md p-3 min-w-[200px]">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <Link
                          to="/resources/case-studies"
                          className="block hover:text-primary"
                        >
                          📚 Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/resources/webinars"
                          className="block hover:text-primary"
                        >
                          🎥 Webinars
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/resources/community"
                          className="block hover:text-primary"
                        >
                          🌐 Community
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {data?.data?.email && (
            <Button onClick={handleLogout} className="text-sm">
              Logout
            </Button>
          )}
          {!data?.data?.email && (
            <Button asChild className="text-sm">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
