import SimulationPreview from "./simulation-preview";

export default function DepositForm() {
  return (
    <main className="flex  gap-8">
      <div className="bg-white rounded-2xl shadow-sm p-6 flex md:flex-col gap-6 w-full max-w-xl">
        <div className="font-semibold text-zinc-900 text-lg mb-2">
          Select Token
        </div>
        <div className="flex items-center gap-3 bg-zinc-50 rounded-xl p-4 mb-4">
          <span className="bg-zinc-100 rounded-full p-2 text-2xl">💎</span>
          <div>
            <div className="font-bold text-zinc-900">WETH</div>
            <div className="text-zinc-500 text-sm">Wrapped Ether</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-zinc-900">Amount</span>
            <span className="text-xs text-zinc-500">Available: 12.45 WETH</span>
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
        </div>
        <div className="flex items-center gap-2 text-zinc-500 text-sm mb-4">
          <span>Estimated Gas</span>
          <span className="font-semibold text-zinc-900">$4.50</span>
          <span className="text-xs">0.002 ETH</span>
        </div>
        <button className="w-full bg-blue-600 text-white font-semibold rounded-xl py-3 text-lg flex items-center justify-center gap-2 shadow">
          <span className="text-xl">💳</span> Deposit & Rebalance
        </button>
        <div className="text-xs text-zinc-400 text-center mt-2">
          POWERED BY UNISWAP V2
        </div>
      </div>
      <SimulationPreview />
    </main>
  );
}
