import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWalletInfoQuery } from "@/redux/feature/wallet/wallet.api";
import { useTransactionInfoQuery } from "@/redux/feature/transaction/transaction.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router";
import type { ITransaction } from "@/types";

const SkeletonRow = () => (
  <TableRow>
    {[...Array(6)].map((_, idx) => (
      <TableCell key={idx}>
        <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
      </TableCell>
    ))}
  </TableRow>
);

const AgentAnalytics = () => {
  const navigate = useNavigate();

  // Wallet info
  const { data: wallet, isLoading: walletLoading } = useWalletInfoQuery(undefined);

  // User transactions
  const { data: transactions, isLoading: txLoading } = useTransactionInfoQuery(undefined);

  // Get last 5 transactions
  const recentTransactions = transactions
    ? transactions.slice(-5).reverse()
    : [];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Wallet Overview */}
      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Wallet Overview</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            {walletLoading ? (
              <div className="h-8 w-32 bg-gray-300 rounded animate-pulse" />
            ) : (
              <h2 className="text-2xl font-bold">Balance: ${wallet?.balance ?? 0}</h2>
            )}
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button onClick={() => navigate("/agent/add-money")} variant="default">
              Add Money
            </Button>
            <Button onClick={() => navigate("/agent/withdraw-money")} variant="default">
              Withdraw
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Recent Transactions</CardTitle>
          <Button size="sm" onClick={() => navigate("/agent/transactions")}>
            View All Transactions
          </Button>
        </CardHeader>
        <CardContent>
          <div className="border border-muted rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sl. No.</TableHead>
                  <TableHead>Initiator</TableHead>
                  <TableHead>Recipient</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date/Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {txLoading
                  ? [...Array(5)].map((_, idx) => <SkeletonRow key={idx} />)
                  : recentTransactions.map((transaction: ITransaction, index: number) => (
                      <TableRow className="*:text-left" key={transaction._id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{transaction.initiator?.email}</TableCell>
                        <TableCell>{transaction.recipient?.email}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>
                          {new Date(transaction.createdAt).toLocaleString(undefined, {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })}
                        </TableCell>
                      </TableRow>
                    ))}
                {!txLoading && recentTransactions.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-4">
                      No recent transactions
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentAnalytics;
