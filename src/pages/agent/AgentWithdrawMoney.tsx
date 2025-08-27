import { useTransactionInfoQuery } from "@/redux/feature/transaction/transaction.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ITransaction } from "@/types";

const AgentWithdrawMoney = () => {
  const { data: transactions } = useTransactionInfoQuery(undefined);
  const withdraws =
    transactions?.filter(
      (withdraw: ITransaction) => withdraw.type === "WITHDRAW"
    ) || [];
  const recentWithdraws = withdraws.reverse();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Withdraw Transactions</h1>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sl. No.</TableHead>
              <TableHead>Initiator</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentWithdraws?.map((withdraw: ITransaction, index: string) => (
              <TableRow className="*:text-left" key={withdraw._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{withdraw.initiator?.email}</TableCell>
                <TableCell>{withdraw.recipient?.email}</TableCell>
                <TableCell>{withdraw.type}</TableCell>
                <TableCell>{withdraw.amount}</TableCell>
                <TableCell>
                  {new Date(withdraw.createdAt).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AgentWithdrawMoney;
