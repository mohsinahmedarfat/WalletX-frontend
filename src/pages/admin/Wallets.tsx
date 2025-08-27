import {
  useAllWalletsQuery,
  useBlockWalletMutation,
} from "@/redux/feature/wallet/wallet.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { IWallet } from "@/types";
import { Ban, CirclePlus } from "lucide-react";

const Wallets = () => {
  const { data: wallets } = useAllWalletsQuery(undefined);

  const [blockWallet, { isLoading }] = useBlockWalletMutation();

  const handleBlockWallet = async (
    userId: string,
    status: "ACTIVE" | "BLOCKED"
  ) => {
    try {
      await blockWallet({
        userId,
        statusData: { status },
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
              <TableHead>Wallet ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {wallets?.map((wallet: IWallet, index: string) => (
              <TableRow key={wallet._id}>
                <TableCell className="text-left font-medium">
                  {index + 1}
                </TableCell>
                <TableCell className="text-left">{wallet._id}</TableCell>
                <TableCell className="text-left">
                  {wallet.user?.email}
                </TableCell>
                <TableCell className="text-left">{wallet.user?.role}</TableCell>
                <TableCell className="text-left">
                  {wallet.status === "ACTIVE" ? "Active" : "Blocked"}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() =>
                      handleBlockWallet(
                        wallet.user?._id as string,
                        wallet.status === "ACTIVE" ? "BLOCKED" : "ACTIVE"
                      )
                    }
                    disabled={isLoading}
                    className={`${
                      wallet.status === "BLOCKED"
                        ? "bg-green-600 hover:bg-green-600 hover:opacity-80"
                        : "bg-red-600 hover:bg-red-600 hover:opacity-80"
                    }`}
                  >
                    {wallet.status === "BLOCKED" ? <CirclePlus /> : <Ban />}
                  </Button>
                  {/* <Button
                    onClick={() =>
                      handleBlockWallet(wallet._id as string, wallet.isBlocked)
                    }
                    disabled={isLoading}
                    className={`${
                      wallet.isBlocked
                        ? "bg-green-600 hover:bg-green-600 hover:opacity-80"
                        : "bg-red-600 hover:bg-red-600 hover:opacity-80"
                    }`}
                    size="sm"
                  >
                    {user.isBlocked ? <CirclePlus /> : <Ban />}
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Wallets;
