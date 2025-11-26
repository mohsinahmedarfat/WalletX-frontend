import { useAllUsersQuery } from "@/redux/feature/auth/auth.api";
import type { IUser } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ManageAgentRequests = () => {

    const { data } = useAllUsersQuery(undefined);
      const agentRequests = data?.filter((user: IUser) => user.approvalStatus === "pending") || [];
      console.log("all agentRequests", agentRequests);

  return (
    <>
      {agentRequests.length === 0 ? (
        <h1 className="text-xl font-bold">No agentRequests Found!</h1>
      ) : (
        <div>
          <h1 className="text-xl font-bold mb-4">Manage All agentRequests</h1>
          <div className="border border-muted rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sl. No.</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Approval Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agentRequests?.map((user: IUser, index: string) => (
                  <TableRow key={user._id}>
                    <TableCell className="text-left font-medium">
                      {index + 1}
                    </TableCell>
                    <TableCell className="text-left">{user.name}</TableCell>
                    <TableCell className="text-left">{user.email}</TableCell>
                    <TableCell className="text-left">{user.role}</TableCell>
                    <TableCell className="text-left">
                      {user.approvalStatus === "pending" ? "Pending" : user.approvalStatus === "approved" ? "Approved" : "Suspended"}
                    </TableCell>
                    {/* <TableCell className="text-right">
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
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageAgentRequests;