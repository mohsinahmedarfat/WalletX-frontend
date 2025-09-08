import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUserInfoQuery } from "@/redux/feature/auth/auth.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardProfile = () => {
  const { data: user, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) {
    return (
      <Card className="min-w-xs mx-auto border border-gray-200 shadow-lg pt-0">
        <CardHeader className="flex flex-col items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-xl p-4">
          <Skeleton className="w-20 h-20 rounded-full border-2 border-white" />
          <Skeleton className="h-6 w-32 rounded-md" />
          <Skeleton className="h-4 w-48 rounded-md" />
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-5 w-12 rounded-md" />
            <Skeleton className="h-5 w-16 rounded-md" />
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="h-5 w-20 rounded-md" />
            <Skeleton className="h-5 w-28 rounded-md" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-sm mx-auto border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 pt-0">
      <CardHeader className="flex flex-col items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-xl p-4">
        <Avatar className="w-20 h-20 border-2 border-white">
          <AvatarImage
            src={`https://ui-avatars.com/api/?name=${user?.data?.name}`}
          />
          <AvatarFallback>{user?.data?.name?.[0]}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl font-semibold">
          {user?.data?.name}
        </CardTitle>
        <CardDescription className="text-white font-semibold">
          {user?.data?.email}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 text-foreground">
        <div className="flex gap-2 items-center">
          <span className="font-medium">Role:</span>
          <Badge variant="secondary">{user?.data?.role}</Badge>
        </div>

        <div className="flex justify-between items-center text-foreground font-medium">
          <span className=" mr-2">Wallet ID:</span>
          <span>{user?.data?.wallet || "N/A"}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardProfile;
