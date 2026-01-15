const filters = [
  { label: "All Activity", color: "bg-zinc-900 text-white" },
  { label: "Rebalances", color: "bg-blue-50 text-blue-600" },
  { label: "Deposits / Withdrawals", color: "bg-green-50 text-green-600" },
  { label: "Config Changes", color: "bg-orange-50 text-orange-600" },
];

export default function HistoryFilters() {
  return (
    <div className="flex gap-3 mb-6">
      {filters.map((f, i) => (
        <button
          key={f.label}
          className={`px-4 py-2 rounded-full font-semibold text-sm focus:outline-none ${
            i === 0 ? f.color : "bg-zinc-100 text-zinc-500"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
