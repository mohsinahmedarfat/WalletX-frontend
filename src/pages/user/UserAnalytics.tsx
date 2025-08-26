import { useWalletInfoQuery } from "@/redux/feature/wallet/wallet.api";

const UserAnalytics = () => {
  const { data } = useWalletInfoQuery(undefined);
  console.log("wallet data", data);

  return (
    <div>
      <h1 className="text-xl font-bold">Wallet Balance: {data?.balance}</h1>
    </div>
  );
};

export default UserAnalytics;
