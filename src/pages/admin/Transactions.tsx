import { useAllTransactionsQuery } from "@/redux/feature/transaction/transaction.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ITransaction } from "@/types";

const Transactions = () => {
  const { data: transactions } = useAllTransactionsQuery(undefined);
  console.log("transactions", transactions);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Transactions</h1>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sl. No.</TableHead>
              <TableHead>Initiator</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions?.map((transaction: ITransaction, index: string) => (
              <TableRow key={transaction._id}>
                <TableCell className="text-left font-medium">
                  {index + 1}
                </TableCell>
                <TableCell className="text-left">
                  {transaction.initiator?.email}
                </TableCell>
                <TableCell className="text-left">
                  {transaction.recipient?.email}
                </TableCell>
                <TableCell className="text-left">{transaction.type}</TableCell>
                <TableCell className="text-left">
                  {transaction.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Transactions;
