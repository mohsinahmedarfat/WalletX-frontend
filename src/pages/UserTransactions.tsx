import { useState } from "react";
import { useTransactionInfoQuery } from "@/redux/feature/transaction/transaction.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
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
  const { data: transactions = [], isLoading } = useTransactionInfoQuery(undefined);

  const [page, setPage] = useState(1);
  const pageSize = 10;

  const totalPages = Math.ceil(transactions.length / pageSize);
  const paginatedTransactions = transactions.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

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
              : paginatedTransactions.map((transaction: ITransaction, index: number) => (
                  <TableRow className="*:text-left" key={transaction._id}>
                    <TableCell className="font-medium">
                      {(page - 1) * pageSize + index + 1}
                    </TableCell>
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

      {/* Pagination Controls */}
      {!isLoading && transactions.length > 0 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="px-2">
            Page {page} of {totalPages || 1}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages || totalPages === 0}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserTransactions;
