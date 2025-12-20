import { PoolList } from "@/components/pools/pool-list";
import { CreatePoolButton } from "@/components/pools/create-pool-button";
import { PoolFilters } from "@/components/pools/pool-filters";

export default function Pools() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Pools
          </h1>
          <CreatePoolButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <PoolFilters />
          </div>
          <div className="lg:col-span-3">
            <PoolList />
          </div>
        </div>
      </div>
    </div>
  );
}