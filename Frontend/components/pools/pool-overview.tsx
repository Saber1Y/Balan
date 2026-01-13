import { Card } from "@/components/ui/card";
import Image from "next/image";

interface PoolOverviewProps {
  name: string;
  symbol: string;
  description?: string;
  balance: string;
  usdValue: string;
  allocation: string;
  drift: string;
  target: string;
  iconUrl?: string;
}

function getDriftColor(drift: string) {
  if (drift.startsWith("+")) return "bg-green-100 text-green-700";
  if (drift.startsWith("-")) return "bg-red-100 text-red-700";
  return "bg-gray-100 text-gray-700";
}

export const PoolOverview = ({
  name,
  symbol,
  description,
  balance,
  usdValue,
  allocation,
  drift,
  target,
  iconUrl,
}: PoolOverviewProps) => {
  // Parse allocation and target for progress bar
  const allocationNum = parseFloat(allocation.replace("%", ""));
  const targetNum = parseFloat(target.replace("%", ""));
  const driftColor = getDriftColor(drift);

  return (
    <Card className="rounded-2xl shadow-sm p-6 bg-white flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
            {iconUrl ? (
              <Image src={iconUrl} alt={symbol} className="w-7 h-7" />
            ) : (
              <span className="text-2xl">💎</span>
            )}
          </div>
          <div>
            <div className="text-zinc-900 font-bold text-xl leading-tight">
              {symbol}
            </div>
            <div className="text-zinc-500 text-sm">{description}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-zinc-900 font-bold text-xl">{balance}</div>
          <div className="text-zinc-500 text-base">≈ {usdValue}</div>
        </div>
      </div>

      <div className="bg-zinc-50 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-zinc-500 font-semibold tracking-wide text-xs">
            ALLOCATION
          </span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-zinc-900 font-bold text-2xl">{allocation}</span>
          <span
            className={`px-2 py-1 rounded-lg text-xs font-semibold ${driftColor}`}
          >
            {drift} Drift
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1 h-3 bg-zinc-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-3 bg-blue-500 rounded-full"
              style={{ width: `${allocationNum}%` }}
            />
            {/* Target marker */}
            <div
              className="absolute top-0 h-3 border-l-2 border-blue-800"
              style={{ left: `${targetNum}%` }}
            />
          </div>
          <span className="text-zinc-400 text-sm ml-2">Target: {target}</span>
        </div>
      </div>
    </Card>
  );
};
