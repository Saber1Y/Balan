import { LiquidityPositions } from "@/components/liquidity/liquidity-positions";
import { AddLiquidityButton } from "@/components/liquidity/add-liquidity-button";

export default function Liquidity() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Liquidity
          </h1>
          <AddLiquidityButton />
        </div>

        <LiquidityPositions />
      </div>
    </div>
  );
}