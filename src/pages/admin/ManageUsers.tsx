import { useAllUsersQuery } from "@/redux/feature/auth/auth.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { IUser } from "@/types";

const ManageUsers = () => {
  const { data } = useAllUsersQuery(undefined);
  console.log("all users", data);

  //   const invoices = [
  //   {
  //     invoice: "INV001",
  //     paymentStatus: "Paid",
  //     totalAmount: "$250.00",
  //     paymentMethod: "Credit Card",
  //   },
  //   {
  //     invoice: "INV002",
  //     paymentStatus: "Pending",
  //     totalAmount: "$150.00",
  //     paymentMethod: "PayPal",
  //   },
  //   {
  //     invoice: "INV003",
  //     paymentStatus: "Unpaid",
  //     totalAmount: "$350.00",
  //     paymentMethod: "Bank Transfer",
  //   },
  //   {
  //     invoice: "INV004",
  //     paymentStatus: "Paid",
  //     totalAmount: "$450.00",
  //     paymentMethod: "Credit Card",
  //   },
  //   {
  //     invoice: "INV005",
  //     paymentStatus: "Paid",
  //     totalAmount: "$550.00",
  //     paymentMethod: "PayPal",
  //   },
  //   {
  //     invoice: "INV006",
  //     paymentStatus: "Pending",
  //     totalAmount: "$200.00",
  //     paymentMethod: "Bank Transfer",
  //   },
  //   {
  //     invoice: "INV007",
  //     paymentStatus: "Unpaid",
  //     totalAmount: "$300.00",
  //     paymentMethod: "Credit Card",
  //   },
  // ]

  return (
    <div className="border border-muted rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Sl. No.</TableHead>
            <TableHead >Name</TableHead>
            <TableHead >Email</TableHead>
            <TableHead >Role</TableHead>
            <TableHead >Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user: IUser, index: string) => (
            <TableRow key={user._id}>
              <TableCell className="text-left font-medium">{index + 1}</TableCell>
              <TableCell className="text-left">{user.name}</TableCell>
              <TableCell className="text-left">{user.email}</TableCell>
              <TableCell className="text-left">{user.role}</TableCell>
              <TableCell className="text-left">{user.isBlocked ? "Blocked" : "Active"}</TableCell>
              <TableCell className="text-right">
                <Button className="bg-red-600 hover:bg-red-600 hover:opacity-80" size="sm">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUsers;
