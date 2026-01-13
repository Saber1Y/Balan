import { Card } from "@/components/ui/card";

const activity = [
  {
    type: "Rebalance",
    date: "Oct 24, 2023",
    details: "Sold 0.2 WETH for 380 USDC",
    status: "Completed",
    icon: "\u21bb", // ⟳
    statusColor: "bg-green-100 text-green-700",
  },
  {
    type: "Deposit",
    date: "Oct 20, 2023",
    details: "Added 1,000 USDC",
    status: "Completed",
    icon: "\u2193", // ↓
    statusColor: "bg-green-100 text-green-700",
  },
];

export default function RecentActivity() {
  return (
    <Card className="rounded-2xl p-6 mt-2">
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-lg text-zinc-900">Recent Activity</span>
        <a href="#" className="text-blue-600 text-sm font-medium">
          View All History
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-zinc-500 text-xs font-semibold">
              <th className="py-2 pr-4">TYPE</th>
              <th className="py-2 pr-4">DATE</th>
              <th className="py-2 pr-4">DETAILS</th>
              <th className="py-2 pr-4">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {activity.map((item, idx) => (
              <tr
                key={idx}
                className="border-t last:border-b-0 border-zinc-100 text-zinc-900 text-sm"
              >
                <td className="py-3 pr-4 font-medium flex items-center gap-2">
                  <span>{item.icon}</span>
                  {item.type}
                </td>
                <td className="py-3 pr-4">{item.date}</td>
                <td className="py-3 pr-4">{item.details}</td>
                <td className="py-3 pr-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
