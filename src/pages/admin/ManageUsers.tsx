import {
  useAllUsersQuery,
  useBlockUserMutation,
} from "@/redux/feature/auth/auth.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { IUser } from "@/types";
import { Ban, CirclePlus } from "lucide-react";

const ManageUsers = () => {
  const { data } = useAllUsersQuery(undefined);
  console.log("all users", data);

  const [blockUser, { isLoading }] = useBlockUserMutation();

  const handleBlockUser = async (userId: string, isBlocked: boolean) => {
    try {
      await blockUser({
        userId,
        statusData: { isBlocked: !isBlocked }, // toggle block/unblock
      }).unwrap();
    } catch (error) {
      console.error("Failed to update block status", error);
    }
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Manage All Users</h1>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sl. No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((user: IUser, index: string) => (
              <TableRow key={user._id}>
                <TableCell className="text-left font-medium">
                  {index + 1}
                </TableCell>
                <TableCell className="text-left">{user.name}</TableCell>
                <TableCell className="text-left">{user.email}</TableCell>
                <TableCell className="text-left">{user.role}</TableCell>
                <TableCell className="text-left">
                  {user.isBlocked ? "Blocked" : "Active"}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() =>
                      handleBlockUser(user._id as string, user.isBlocked)
                    }
                    disabled={isLoading}
                    className={`${
                      user.isBlocked
                        ? "bg-green-600 hover:bg-green-600 hover:opacity-80"
                        : "bg-red-600 hover:bg-red-600 hover:opacity-80"
                    }`}
                    size="sm"
                  >
                    {user.isBlocked ? <CirclePlus /> : <Ban />}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ManageUsers;
