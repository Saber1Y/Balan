import PortfolioSettings from "@/components/settings/portfolio-settings";
import RebalancingRules from "@/components/settings/rebalancing-rules";
import IntegrationStatus from "@/components/settings/integration-status";

export default function Settings() {
  return (
    <div className="min-h-screen bg-zinc-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Portfolio Settings
          </h1>
        </div>
        <p className="text-zinc-500 mb-4">
          Manage your WETH/USDC auto-rebalancing parameters and automation
          triggers.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <PortfolioSettings />
            <IntegrationStatus />
          </div>
          <RebalancingRules />
        </div>
      </div>
    </div>
  );
}
