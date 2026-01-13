import eth from "../../public/eth.svg";
import Image from "next/image";

export default function WithdrawForm() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-6 w-full max-w-xxl">
      <div className="font-semibold text-zinc-900 text-lg mb-2">
        Select Asset & Amount
      </div>
      <div className="flex items-center gap-3 bg-zinc-50 rounded-xl p-4 mb-4">
        <Image
          src={eth}
          alt="ETH"
          className="bg-zinc-100 rounded-full p-2 text-2xl w-8"
        />
        <div>
          <div className="font-bold text-zinc-900">ETH</div>
        </div>
        <span className="ml-auto text-xs text-zinc-500">
          Available: 4.20 ETH
        </span>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-zinc-900">Amount</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="0.00"
            className="w-full rounded-xl border border-zinc-200 p-3 text-lg font-semibold bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button className="text-blue-600 font-semibold px-3 py-1 rounded-lg bg-blue-50">
            MAX
          </button>
        </div>
        <div className="text-xs text-zinc-500 mt-1">≈ $0.00 USD</div>
      </div>
      <PortfolioImpact />
      <div className="flex flex-col gap-1 text-xs text-zinc-500 mt-2">
        <span>Exchange Rate: 1 ETH = 2,250 USDC</span>
        <span>Slippage Tolerance: 0.5%</span>
        <span>Network Cost: ~$4.50 (0.002 ETH)</span>
      </div>
      <div className="bg-blue-50 text-blue-700 text-xs rounded-lg p-3 mt-2">
        Withdrawing single assets from the liquidity pool may incur a small swap
        fee due to underlying Uniswap V2 rebalancing.
      </div>
      <button className="w-full bg-blue-600 text-white font-semibold rounded-xl py-3 text-lg flex items-center justify-center gap-2 shadow mt-4">
        Withdraw ETH
      </button>
    </div>
  );
}

function PortfolioImpact() {
  return (
    <div className="bg-zinc-50 rounded-xl p-4 mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600">ⓘ</span>
        <span className="font-semibold text-zinc-900">Portfolio Impact</span>
      </div>
      <div className="flex justify-between text-xs text-zinc-500 mb-1">
        <span>Current Allocation</span>
        <span>Projected Allocation</span>
      </div>
      <div className="w-full h-3 bg-zinc-200 rounded-full mb-2 relative">
        <div
          className="h-3 bg-blue-600 rounded-full absolute left-0 top-0"
          style={{ width: "50%" }}
        ></div>
        <div
          className="h-3 bg-blue-400 rounded-full absolute left-1/2 top-0"
          style={{ width: "50%" }}
        ></div>
        {/* Projected bar overlay */}
        <div
          className="h-3 bg-blue-600/70 rounded-full absolute left-0 top-0"
          style={{ width: "42%" }}
        ></div>
        <div
          className="h-3 bg-blue-400/70 rounded-full absolute left-[42%] top-0"
          style={{ width: "58%" }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-zinc-500">
        <div>
          <div>Current Value</div>
          <div className="text-zinc-900 font-semibold text-base">
            $12,450.00
          </div>
        </div>
        <div className="text-right">
          <div>Projected Value</div>
          <div className="text-zinc-900 font-semibold text-base">
            $10,200.00 <span className="text-red-500">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
