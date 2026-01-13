import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoolOverview } from "@/components/pools/pool-overview";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { PortfolioValue } from "@/components/dashboard/portfolio-value";
import PieChartInGrid from "@/components/charts/pie-chart";
import StrategyActions from "@/components/dashboard/strategy-actions";
import RecentActivity from "@/components/dashboard/recent-activity";

const poolData = [
  {
    name: "WETH/USDC Pool",
    symbol: "WETH",
    description: "Wrapped Ether",
    balance: "4.50 WETH",
    usdValue: "$8,500",
    allocation: "52%",
    drift: "+2%",
    target: "50%",
  },
  {
    name: "WBTC/USDT Pool",
    symbol: "WBTC",
    description: "Wrapped Bitcoin",
    balance: "1.25 WBTC",
    usdValue: "$55,000",
    allocation: "48%",
    drift: "-1%",
    target: "50%",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-50  p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PortfolioValue />
            <PoolOverview {...poolData[0]} />
            <PoolOverview {...poolData[1]} />
          </div>
          <div className="">
            <PieChartInGrid />
            <RecentTransactions />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <StrategyActions />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
