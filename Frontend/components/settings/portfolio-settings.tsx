"use client";

import { useState } from "react";

export default function PortfolioSettings() {
  const [weth, setWeth] = useState(50);
  const [usdc, setUsdc] = useState(50);

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setWeth(value);
    setUsdc(100 - value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-6">
      <div className="font-semibold text-zinc-900 text-lg mb-1">
        Target Allocation
      </div>
      <div className="text-zinc-500 text-sm mb-4">
        Define your target portfolio distribution. Total must equal 100%.
      </div>
      <div className="flex items-center gap-6 mb-4">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-zinc-50 flex items-center justify-center mb-2">
            <svg width="60" height="60" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="#f1f5f9" />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#2563eb"
                strokeWidth="4"
                strokeDasharray={`${(weth / 100) * 100} 100`}
                transform="rotate(-90 18 18)"
              />
              <text
                x="18"
                y="18"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fill="#888"
              >
                Target
              </text>
              <text
                x="18"
                y="26"
                textAnchor="middle"
                fontWeight="bold"
                fontSize="16"
                fill="#2563eb"
              >
                {weth}/{usdc}
              </text>
            </svg>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-zinc-100 rounded-full p-2 text-lg">W</span>
            <span className="font-semibold text-zinc-900">WETH</span>
            <input
              type="number"
              min={0}
              max={100}
              value={weth}
              onChange={(e) =>
                handleSlider({ target: { value: e.target.value } } as any)
              }
              className="w-16 ml-2 rounded-lg border border-zinc-200 p-2 text-center"
            />
            <span className="text-zinc-500">%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-zinc-100 rounded-full p-2 text-lg">S</span>
            <span className="font-semibold text-zinc-900">USDC</span>
            <input
              type="number"
              min={0}
              max={100}
              value={usdc}
              readOnly
              className="w-16 ml-2 rounded-lg border border-zinc-200 p-2 text-center bg-zinc-50"
            />
            <span className="text-zinc-500">%</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="range"
          min={0}
          max={100}
          value={weth}
          onChange={handleSlider}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-xs text-zinc-500">
          <span>0% WETH</span>
          <span>50%</span>
          <span>100% WETH</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
        <span>Est. Gas: ~0.002 ETH</span>
      </div>
      <button className="w-full bg-blue-600 text-white font-semibold rounded-xl py-3 text-lg flex items-center justify-center gap-2 shadow">
        Save Allocation
      </button>
    </div>
  );
}
