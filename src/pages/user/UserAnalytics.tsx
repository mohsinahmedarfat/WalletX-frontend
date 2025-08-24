import { useWalletInfoQuery } from "@/redux/feature/wallet/wallet.api";

const UserAnalytics = () => {
  const {data}=useWalletInfoQuery(undefined)
  console.log("wallet data", data);

  return (
    <div>
      <h1>This is UserAnalytics component</h1>
      <h1>Wallet Balance: {data.balance}</h1>
    </div>
  );
};

export default UserAnalytics;