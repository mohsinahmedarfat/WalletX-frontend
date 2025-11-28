import { useNotificationInfoQuery } from "@/redux/feature/notification/notification.api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { INotification } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

const Notification = () => {
  const { data: notifications, isLoading } =
    useNotificationInfoQuery(undefined);

  const latestNotifications = notifications ? [...notifications].reverse() : [];

  return (
    <div className="max-w-2xl mx-auto my-8 space-y-4">
      <Card className="border-muted shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Notifications</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {/* Loading UI */}
          {isLoading && (
            <div className="space-y-3">
              <Skeleton className="h-16 w-full rounded-xl" />
              <Skeleton className="h-16 w-full rounded-xl" />
              <Skeleton className="h-16 w-full rounded-xl" />
            </div>
          )}

          {/* After loading, if empty */}
          {!isLoading && !latestNotifications?.length && (
            <p className="text-sm text-muted-foreground">
              No notifications found.
            </p>
          )}

          {/* Render notifications */}
          {latestNotifications?.map((item: INotification) => (
            <div
              key={item._id}
              className="p-3 rounded-md border bg-muted/30 hover:bg-muted/50 transition"
            >
              <p className="text-sm">{item.message}</p>

              <Badge variant="outline" className="mt-2 text-[10px]">
                {new Date(item.createdAt).toLocaleString()}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Notification;
