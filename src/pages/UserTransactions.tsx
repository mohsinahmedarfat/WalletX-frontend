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

// Skeleton row component for loading state
const SkeletonRow = () => (
  <TableRow>
    {[...Array(6)].map((_, idx) => (
      <TableCell key={idx}>
        <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
      </TableCell>
    ))}
  </TableRow>
);

const UserTransactions = () => {
  const { data: transactions, isLoading } = useTransactionInfoQuery(undefined);

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
              <TableHead>Date/Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading
              ? [...Array(5)].map((_, idx) => <SkeletonRow key={idx} />)
              : transactions?.map((transaction: ITransaction, index: number) => (
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
            {!isLoading && transactions?.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  No transactions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserTransactions;
