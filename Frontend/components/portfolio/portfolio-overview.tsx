import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PortfolioOverview = () => {
  const holdings = [
    { token: "ETH", balance: "15.234", value: "$45,702.00", percentage: 36.4 },
    { token: "USDC", balance: "25,000", value: "$25,000.00", percentage: 19.9 },
    { token: "WBTC", balance: "0.5", value: "$21,500.00", percentage: 17.1 },
    { token: "DAI", balance: "15,000", value: "$15,000.00", percentage: 12.0 },
    { token: "LINK", balance: "500", value: "$7,500.00", percentage: 6.0 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {holdings.map((holding) => (
            <div key={holding.token} className="flex items-center justify-between p-3 border rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{holding.token}</span>
                </div>
                <div>
                  <div className="font-medium">{holding.token}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{holding.balance}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{holding.value}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{holding.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};