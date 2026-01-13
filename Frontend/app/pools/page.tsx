import LiquidityTabs from "@/components/pools/liquidity-tabs";

export default function Pools() {
  return (
    <div className="min-h-screen bg-zinc-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-900">Manage Liquidity</h1>
        </div>
        <p className="text-zinc-500 mb-4">
          Deposit or withdraw funds to your auto-rebalancing portfolio.
        </p>
        <div className="">
          <LiquidityTabs />
        </div>
      </div>
    </div>
  );
}
