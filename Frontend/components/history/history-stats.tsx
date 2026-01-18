import { FaGasPump } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";
import { SiConfluence } from "react-icons/si";

const HistoryStatsData = [
  {
    icon: <FaGasPump className="text-black" />,
    title: "Total Gas Spent",
    amount: "0.45 ETH",
    price: "845.20",
  },
  {
    icon: <SiConfluence className="text-black" />,
    title: "Total Rebalances",
    amount: "142",
    price: "",
  },
  {
    icon: <MdOutlineShowChart className="text-green-300 text-lg" />,
    title: "Net Volume",
    amount: "$1.2M",
    price: "",
  },
];

export default function HistoryStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {HistoryStatsData.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 flex flex-col items-start shadow-sm"
        >
          <span className="flex gap-2 items-center">
            {stat.icon}
            <span className="text-zinc-500 text-xs mb-1">{stat.title}</span>
          </span>

          <span className="text-2xl font-bold text-zinc-900">
            {stat.amount}
          </span>

          {stat.price && (
            <span className="text-zinc-400 text-xs">(${stat.price})</span>
          )}
        </div>
      ))}
    </div>
  );
}
