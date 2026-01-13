import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export default function StrategyActions() {
  return (
    <Card className="rounded-2xl flex items-center justify-between p-6 mb-6">
      <div className="flex items-center gap-4">
        <span className="bg-zinc-100 rounded-full p-3">
          <AdjustmentsHorizontalIcon className="w-6 h-6 text-blue-500" />
        </span>
        <div>
          <div className="font-semibold text-zinc-900 text-lg">
            Adjust Strategy
          </div>
          <div className="text-zinc-500 text-sm">
            Modify target weights or set drift threshold
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          variant="ghost"
          className="rounded-full font-semibold px-6 py-2 text-zinc-900 bg-zinc-100"
        >
          Deposit More
        </Button>
        <Button className="rounded-full font-semibold px-6 py-2 bg-blue-600 text-white">
          Adjust Allocation
        </Button>
      </div>
    </Card>
  );
}
