const today = [
  {
    type: "Auto-Rebalance Executed",
    status: "success",
    details: "Swapped 1.2 WETH → 2,150 USDC via Uniswap V2",
    gas: "0.004 ETH ($8.50)",
    triggered: "Triggered by Chainlink",
    time: "2 hours ago",
    tx: "0x88...21",
    txUrl: "#",
    icon: "\uD83D\uDEE0\uFE0F", // 🛠️
    color: "bg-blue-50",
    label: "success",
  },
  {
    type: "Liquidity Deposit",
    status: "completed",
    details: "Added 5.0 WETH and 9,000 USDC",
    gas: "0.002 ETH ($4.25)",
    triggered: "Manual User Action",
    time: "5 hours ago",
    tx: "0x12...99",
    txUrl: "#",
    icon: "\uD83D\uDCB0", // 💰
    color: "bg-green-50",
    label: "completed",
  },
];

const yesterday = [
  {
    type: "Strategy Configuration Update",
    status: "config",
    details: "Updated deviation threshold from 2.5% to 2.0%",
    gas: "0.001 ETH ($2.10)",
    triggered: "-",
    time: "Yesterday, 4:30 PM",
    tx: "0x45...ab",
    txUrl: "#",
    icon: "\uD83D\uDCCB", // 📋
    color: "bg-orange-50",
    label: "config",
  },
  {
    type: "Auto-Rebalance Executed",
    status: "success",
    details: "Swapped 850 USDC → 0.45 WETH via Uniswap V2",
    gas: "0.005 ETH ($10.20)",
    triggered: "Triggered by Chainlink",
    time: "Yesterday, 9:15 AM",
    tx: "0x99...ff",
    txUrl: "#",
    icon: "\uD83D\uDEE0\uFE0F", // 🛠️
    color: "bg-blue-50",
    label: "success",
  },
];

function ActivityCard({ item }: { item: any }) {
  return (
    <div
      className={`rounded-2xl p-5 mb-4 flex flex-col gap-2 shadow-sm ${item.color}`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl">{item.icon}</span>
        <span className="font-semibold text-zinc-900">{item.type}</span>
        {item.label === "success" && (
          <span className="ml-2 px-2 py-0.5 rounded bg-blue-100 text-blue-600 text-xs font-bold">
            success
          </span>
        )}
      </div>
      <div className="text-zinc-900 text-sm">{item.details}</div>
      <div className="flex items-center gap-4 text-xs text-zinc-500">
        <span>{item.gas}</span>
        {item.triggered !== "-" && <span>• {item.triggered}</span>}
      </div>
      <div className="flex justify-between items-center text-xs text-zinc-400 mt-1">
        <span>{item.time}</span>
        <a
          href={item.txUrl}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.tx}
        </a>
      </div>
    </div>
  );
}

export default function HistoryActivity() {
  return (
    <div className="mt-6">
      <div className="mb-2 text-xs text-zinc-500 font-semibold">TODAY</div>
      {today.map((item, i) => (
        <ActivityCard key={i} item={item} />
      ))}
      <div className="mb-2 mt-6 text-xs text-zinc-500 font-semibold">
        YESTERDAY
      </div>
      {yesterday.map((item, i) => (
        <ActivityCard key={i} item={item} />
      ))}
      <div className="flex justify-center mt-6">
        <button className="text-zinc-500 hover:text-blue-600 font-semibold text-sm">
          Load More Activity
        </button>
      </div>
    </div>
  );
}
