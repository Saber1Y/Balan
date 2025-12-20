import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoolOverview } from "@/components/pools/pool-overview";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { PortfolioValue } from "@/components/dashboard/portfolio-value";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PortfolioValue />
            <PoolOverview />
          </div>
          <div className="space-y-6">
            <QuickActions />
            <RecentTransactions />
          </div>
        </div>
      </div>
    </div>
  );
}