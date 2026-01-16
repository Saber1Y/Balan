import { FaGasPump } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";
import { SiConfluence } from "react-icons/si";

export default function HistoryStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-2xl p-6 flex flex-col items-start shadow-sm">
        <span className="flex gap-2">
          <FaGasPump className="text-black" />
          <span className="text-zinc-500 text-xs mb-1">Total Gas Spent</span>
        </span>
        <span className="text-2xl font-bold text-zinc-900">0.45 ETH</span>
        <span className="text-zinc-400 text-xs">($845.20)</span>
      </div>
      <div className="bg-white rounded-2xl p-6 flex flex-col items-start shadow-sm">
        <span className="flex gap-2">
          <SiConfluence className="text-black" />
          <span className="text-zinc-500 text-xs mb-1">Total Rebalances</span>
        </span>
        <span className="text-2xl font-bold text-zinc-900">142</span>
      </div>
      <div className="bg-white rounded-2xl p-6 flex flex-col items-start shadow-sm">
        <span className="flex gap-2">
          <MdOutlineShowChart className="text-green-300 text-lg" />
          <span className="text-zinc-500 text-xs mb-1">Net Volume</span>
        </span>
        <span className="text-2xl font-bold text-zinc-900">$1.2M</span>
      </div>
    </div>
  );
}
