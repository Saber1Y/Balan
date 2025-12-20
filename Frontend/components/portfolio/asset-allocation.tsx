import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AssetAllocation = () => {
  const allocations = [
    { category: "Liquidity Positions", value: "$95,234.12", percentage: 75.9 },
    { category: "Wallet Balance", value: "$30,198.44", percentage: 24.1 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {allocations.map((allocation) => (
          <div key={allocation.category} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">{allocation.category}</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{allocation.value}</span>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${allocation.percentage}%` }}
              />
            </div>
            <div className="text-right text-xs text-zinc-600 dark:text-zinc-400">
              {allocation.percentage}%
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};