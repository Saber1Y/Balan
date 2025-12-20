import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  id: string;
  type: "swap" | "add_liquidity" | "remove_liquidity";
  amount: string;
  token: string;
  timestamp: string;
  status: "completed" | "pending";
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "swap",
    amount: "0.5 ETH → 1,000 USDC",
    token: "ETH/USDC",
    timestamp: "10 minutes ago",
    status: "completed"
  },
  {
    id: "2",
    type: "add_liquidity",
    amount: "2.0 ETH + 4,000 USDC",
    token: "ETH/USDC Pool",
    timestamp: "2 hours ago",
    status: "completed"
  },
  {
    id: "3",
    type: "remove_liquidity",
    amount: "0.3 ETH + 600 USDC",
    token: "ETH/USDC Pool",
    timestamp: "5 hours ago",
    status: "completed"
  }
];

export const RecentTransactions = () => {
  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "swap":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      case "add_liquidity":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        );
      case "remove_liquidity":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockTransactions.map((tx) => (
            <div key={tx.id} className="flex items-center gap-3 p-2">
              <div className="flex-shrink-0 w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                {getTransactionIcon(tx.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{tx.amount}</div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">{tx.timestamp}</div>
              </div>
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${
                  tx.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};