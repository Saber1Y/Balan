"use client";
import { useState } from "react";

export default function RebalancingRules() {
  const [deviation, setDeviation] = useState(3);
  const [interval, setInterval] = useState("Every 4 Hours");
  const [autoRebalance, setAutoRebalance] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-6">
      <div className="font-semibold text-zinc-900 text-lg mb-1">
        Rebalancing Rules
      </div>
      <div className="text-zinc-500 text-sm mb-4">
        Configure when the system should act.
      </div>
      <div className="flex items-center justify-between mb-2">
        <span>Deviation Threshold</span>
        <span className="text-blue-600 font-bold cursor-pointer">
          {deviation.toFixed(1)}%
        </span>
      </div>
      <input
        type="range"
        min={1}
        max={10}
        step={0.1}
        value={deviation}
        onChange={(e) => setDeviation(Number(e.target.value))}
        className="w-full accent-blue-600 mb-2"
      />
      <div className="flex justify-between text-xs text-zinc-500 mb-4">
        <span>1% (Strict)</span>
        <span>10% (Loose)</span>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span>Check Interval</span>
          <select
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
            className="rounded-lg border border-zinc-200 p-2 text-sm bg-zinc-50"
          >
            <option>Every 1 Hour</option>
            <option>Every 4 Hours</option>
            <option>Every 12 Hours</option>
            <option>Every 24 Hours</option>
          </select>
        </div>
        <div className="text-xs text-zinc-500">
          More frequent checks may incur higher Chainlink keeper costs.
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span>Auto-Rebalance</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={autoRebalance}
            onChange={() => setAutoRebalance(!autoRebalance)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-zinc-200 rounded-full peer peer-checked:bg-blue-600 transition-colors"></div>
          <div className="absolute ml-1 mt-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform"></div>
        </label>
      </div>
      <div className="text-xs text-zinc-500 mt-2">Currently active</div>
    </div>
  );
}
