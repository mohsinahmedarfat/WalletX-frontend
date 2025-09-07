/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAllUsersQuery } from "@/redux/feature/auth/auth.api";
import { useAllTransactionsQuery } from "@/redux/feature/transaction/transaction.api";
import type { ITransaction, IUser } from "@/types";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

// Skeleton for loading state
const SkeletonRow = () => (
  <TableRow>
    {[...Array(6)].map((_, idx) => (
      <TableCell key={idx}>
        <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
      </TableCell>
    ))}
  </TableRow>
);

const AdminAnalytics = () => {
  // Fetch data
  const { data: users, isLoading: usersLoading } = useAllUsersQuery(undefined);
  const { data: allUsers, isLoading: agentsLoading } =
    useAllUsersQuery(undefined);
  const { data: transactions, isLoading: txLoading } =
    useAllTransactionsQuery(undefined);

  // Derived values
  const agents = allUsers?.filter((user: IUser) => user.role === "AGENT") || [];
  const totalUsers = users?.length ?? 0;
  const totalAgents = agents?.length ?? 0;
  const transactionCount = transactions?.length ?? 0;
  const transactionVolume =
    transactions?.reduce((sum: number, tx: any) => sum + (tx.amount || 0), 0) ??
    0;

  // Users by role for Pie Chart
  const roleCounts =
    users?.reduce((acc: Record<string, number>, user: IUser) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {}) || {};

  const pieData = {
    labels: Object.keys(roleCounts),
    datasets: [
      {
        data: Object.values(roleCounts),
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
      },
    ],
  };

  // Transactions per day for Bar Chart
  const txPerDay: Record<string, number> = {};
  transactions?.forEach((tx: any) => {
    const date = new Date(tx.createdAt).toLocaleDateString();
    txPerDay[date] = (txPerDay[date] || 0) + tx.amount;
  });

  const barData = {
    labels: Object.keys(txPerDay),
    datasets: [
      {
        label: "Transaction Volume",
        data: Object.values(txPerDay),
        backgroundColor: "#3B82F6",
      },
    ],
  };

  // Card component
  const StatCard = ({
    title,
    value,
    loading,
  }: {
    title: string;
    value: string | number;
    loading: boolean;
  }) => (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-8 w-24" />
        ) : (
          <p className="text-2xl font-bold">{value}</p>
        )}
      </CardContent>
    </Card>
  );

  const navigate = useNavigate();

  // Show last 5 transactions
  const recentTransactions = transactions?.slice(-5).reverse();
  console.log("recentTransactions", recentTransactions);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Admin Analytics Overview</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={totalUsers}
          loading={usersLoading}
        />
        <StatCard
          title="Total Agents"
          value={totalAgents}
          loading={agentsLoading}
        />
        <StatCard
          title="Transactions"
          value={transactionCount}
          loading={txLoading}
        />
        <StatCard
          title="Transaction Volume"
          value={`$${transactionVolume}`}
          loading={txLoading}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Transactions per Day</CardTitle>
          </CardHeader>
          <CardContent>
            {txLoading ? (
              <Skeleton className="h-64 w-full" />
            ) : (
              <Bar data={barData} />
            )}
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Users by Role</CardTitle>
          </CardHeader>
          <CardContent>
            {usersLoading ? (
              <Skeleton className="h-64 w-full" />
            ) : (
              <div className="w-64 h-64 mx-auto">
                <Pie data={pieData} />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader className="flex flex-col md:flex-row justify-between items-center">
          <CardTitle className="text-xl font-bold">
            Recent Transactions
          </CardTitle>
          <Button size="sm" onClick={() => navigate("/admin/transactions")}>
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
                  : recentTransactions.map(
                      (tx: ITransaction, index: number) => (
                        <TableRow className="*:text-left" key={tx._id}>
                          <TableCell className="font-medium">
                            {index + 1}
                          </TableCell>
                          <TableCell>{tx.initiator?.email}</TableCell>
                          <TableCell>{tx.recipient?.email}</TableCell>
                          <TableCell>{tx.type}</TableCell>
                          <TableCell>${tx.amount}</TableCell>
                          <TableCell>
                            {new Date(tx.createdAt).toLocaleString(undefined, {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })}
                          </TableCell>
                        </TableRow>
                      )
                    )}
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

export default AdminAnalytics;
