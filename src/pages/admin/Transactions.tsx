import { useState, useMemo } from "react";
import { useAllTransactionsQuery } from "@/redux/feature/transaction/transaction.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ITransaction } from "@/types";

// Skeleton row: 6 columns with pulsating grey boxes
const SkeletonRow = () => (
  <TableRow>
    {[...Array(6)].map((_, idx) => (
      <TableCell key={idx}>
        <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
      </TableCell>
    ))}
  </TableRow>
);

const Transactions = () => {
  const { data: transactions = [], isLoading } =
    useAllTransactionsQuery(undefined);

  // State for filters
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // State for pagination
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Apply filtering + sorting
  const filteredTransactions = useMemo(() => {
    let result = [...transactions];

    // Search (by initiator or recipient email)
    if (search.trim()) {
      result = result.filter(
        (tx) =>
          tx.initiator?.email?.toLowerCase().includes(search.toLowerCase()) ||
          tx.recipient?.email?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Type filter
    if (typeFilter !== "all") {
      result = result.filter((tx) => tx.type === typeFilter);
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "amount") {
        return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount;
      }
      if (sortBy === "date") {
        return sortOrder === "asc"
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      return 0;
    });

    return result;
  }, [transactions, search, typeFilter, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredTransactions.length / pageSize);
  const paginatedTransactions = filteredTransactions.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Transactions</h1>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 mb-4 items-center justify-center">
        <Input
          placeholder="Search by email..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset to page 1 when filter changes
          }}
          className="w-64"
        />

        <Select
          value={typeFilter}
          onValueChange={(val) => {
            setTypeFilter(val);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="SEND">Send</SelectItem>
            <SelectItem value="WITHDRAW">Withdraw</SelectItem>
            <SelectItem value="TOP_UP">Top-up</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={sortBy}
          onValueChange={(val) => {
            setSortBy(val);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="amount">Amount</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={sortOrder}
          onValueChange={(val: "asc" | "desc") => {
            setSortOrder(val);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Ascending</SelectItem>
            <SelectItem value="desc">Descending</SelectItem>
          </SelectContent>
        </Select>

        {/* Reset button */}
        <Button
          variant="destructive"
          onClick={() => {
            setSearch("");
            setTypeFilter("all");
            setSortBy("date");
            setSortOrder("desc");
            setPage(1);
          }}
        >
          Reset
        </Button>
      </div>

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
              ? [...Array(pageSize)].map((_, idx) => <SkeletonRow key={idx} />)
              : paginatedTransactions.map(
                  (transaction: ITransaction, index: number) => (
                    <TableRow className="*:text-left" key={transaction._id}>
                      <TableCell className="font-medium">
                        {(page - 1) * pageSize + index + 1}
                      </TableCell>
                      <TableCell>{transaction.initiator?.email}</TableCell>
                      <TableCell>{transaction.recipient?.email}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>
                        {new Date(transaction.createdAt).toLocaleString(
                          undefined,
                          {
                            dateStyle: "medium",
                            timeStyle: "short",
                          }
                        )}
                      </TableCell>
                    </TableRow>
                  )
                )}

            {!isLoading && paginatedTransactions.length === 0 && (
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
    </div>
  );
};

export default Transactions;
