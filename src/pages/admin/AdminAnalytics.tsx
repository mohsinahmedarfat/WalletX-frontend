/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAllUsersQuery } from "@/redux/feature/auth/auth.api";
import { useAllTransactionsQuery } from "@/redux/feature/transaction/transaction.api";
import type { IUser } from "@/types";

const AdminAnalytics = () => {
  // Queries (replace with your real endpoints/hooks)
  const { data: users, isLoading: usersLoading } = useAllUsersQuery(undefined);
  const { data: allUsers, isLoading: agentsLoading } =
    useAllUsersQuery(undefined);
    const agents = allUsers?.filter((user: IUser) => user.role === "AGENT") || [];
  const { data: transactions, isLoading: txLoading } =
    useAllTransactionsQuery(undefined);

  // Derived values
  const totalUsers = users?.length ?? 0;
  const totalAgents = agents?.length ?? 0;
  const transactionCount = transactions?.length ?? 0;
  const transactionVolume =
    transactions?.reduce((sum: number, tx: any) => sum + (tx.amount || 0), 0) ??
    0;

  // Card component with skeleton
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

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Admin Analytics Overview</h1>

      {/* Overview Grid */}
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
    </div>
  );
};

export default AdminAnalytics;
