export default function IntegrationStatus() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-4">
      <div className="font-semibold text-zinc-900 text-lg mb-3 flex items-center gap-2">
        Integration & Security Status
      </div>
      <div className="flex gap-4 mb-2">
        <div className="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-2">
          <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
          <span className="font-semibold text-green-700">
            Chainlink Automation
          </span>
          <span className="text-xs text-green-700 ml-2">Operational</span>
        </div>
        <div className="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-2">
          <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
          <span className="font-semibold text-green-700">
            Uniswap V2 Router
          </span>
          <span className="text-xs text-green-700 ml-2">Connected</span>
        </div>
      </div>
      <div className="text-xs text-zinc-500 mt-2">
        Security Note: Smart contracts are audited. Max slippage is hardcoded to
        0.5% for all rebalancing swaps.
      </div>
    </div>
  );
}
