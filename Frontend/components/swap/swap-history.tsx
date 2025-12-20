import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SwapTransaction {
  id: string;
  from: { token: string; amount: string };
  to: { token: string; amount: string };
  timestamp: string;
  status: "completed" | "pending" | "failed";
}

const mockSwapHistory: SwapTransaction[] = [
  {
    id: "1",
    from: { token: "ETH", amount: "0.5" },
    to: { token: "USDC", amount: "1,000" },
    timestamp: "2 hours ago",
    status: "completed"
  },
  {
    id: "2",
    from: { token: "USDC", amount: "500" },
    to: { token: "WBTC", amount: "0.02" },
    timestamp: "5 hours ago",
    status: "completed"
  },
  {
    id: "3",
    from: { token: "ETH", amount: "1.0" },
    to: { token: "DAI", amount: "2,000" },
    timestamp: "1 day ago",
    status: "completed"
  }
];

export const SwapHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Swaps</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockSwapHistory.map((swap) => (
            <div key={swap.id} className="flex items-center justify-between p-3 border rounded-md">
              <div className="flex-1">
                <div className="font-medium">
                  {swap.from.amount} {swap.from.token} → {swap.to.amount} {swap.to.token}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{swap.timestamp}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  swap.status === 'completed' ? 'bg-green-500' : 
                  swap.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <span className="text-sm capitalize">{swap.status}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};