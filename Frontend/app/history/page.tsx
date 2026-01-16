import HistoryStats from "@/components/history/history-stats";
import HistoryFilters from "@/components/history/history-filters";
import HistoryActivity from "@/components/history/history-activity";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900  mb-1">
                Portfolio History
              </h1>
              <p className="text-zinc-500 text-base">
                Track automated rebalances, manual interventions, and config
                changes.
              </p>
            </div>
            <button className="bg-white border border-zinc-200 rounded-xl px-4 py-2 font-semibold text-zinc-900 shadow-sm flex items-center gap-2">
              <span className="text-lg">⇩</span> Export CSV
            </button>
          </div>
          <HistoryStats />
          <HistoryFilters />
          <HistoryActivity />
        </div>
      </div>
    </div>
  );
}
