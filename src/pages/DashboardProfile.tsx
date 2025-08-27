import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUserInfoQuery } from "@/redux/feature/auth/auth.api";

const DashboardProfile = () => {
  const { data: user } = useUserInfoQuery(undefined);
  console.log("user", user.data);
  return (
    <div>
      <Card className="max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">{user?.data?.name}</CardTitle>
          <CardDescription>{user?.data?.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Role: {user?.data?.role}</p>
          <p>Wallet ID: {user?.data?.wallet}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardProfile;
