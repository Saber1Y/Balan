import { SwapInterface } from "@/components/swap/swap-interface";
import { SwapHistory } from "@/components/swap/swap-history";

export default function Swap() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Swap
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SwapInterface />
          </div>
          <div className="lg:col-span-1">
            <SwapHistory />
          </div>
        </div>
      </div>
    </div>
  );
}