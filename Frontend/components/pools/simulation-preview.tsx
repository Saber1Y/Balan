export default function SimulationPreview() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4 w-full max-w-md mt-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
        <span className="font-semibold text-zinc-900">Simulation Preview</span>
      </div>
      <div className="mb-2">
        <div className="flex justify-between text-xs text-zinc-500 mb-1">
          <span>Current Allocation</span>
          <span>$12,450.00</span>
        </div>
        <div className="w-full h-3 bg-zinc-200 rounded-full mb-1 relative">
          <div
            className="h-3 bg-blue-600 rounded-full absolute left-0 top-0"
            style={{ width: "50%" }}
          ></div>
          <div
            className="h-3 bg-blue-400 rounded-full absolute left-1/2 top-0"
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-zinc-500">
          <span>50% WETH</span>
          <span>50% USDC</span>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <span className="text-2xl">↓</span>
      </div>
      <div className="mb-2">
        <div className="flex justify-between text-xs text-zinc-500 mb-1">
          <span>Projected Allocation</span>
          <span className="text-blue-600 font-semibold">~$14,850.00</span>
        </div>
        <div className="w-full h-3 bg-zinc-200 rounded-full mb-1 relative">
          <div
            className="h-3 bg-blue-600 rounded-full absolute left-0 top-0"
            style={{ width: "52%" }}
          ></div>
          <div
            className="h-3 bg-blue-400 rounded-full absolute left-[52%] top-0"
            style={{ width: "48%" }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-zinc-500">
          <span>52% WETH</span>
          <span>48% USDC</span>
        </div>
      </div>
      <div className="flex justify-between text-xs text-zinc-500 mb-2">
        <span>Action</span>
        <span className="font-semibold text-zinc-900">Deposit</span>
        <span>Trigger Rebalance</span>
        <span className="text-green-600 font-semibold">Yes ✓</span>
      </div>
      <div className="bg-blue-50 text-blue-700 text-xs rounded-lg p-3 mt-2">
        Depositing a single-sided asset (WETH) will automatically trigger a
        Chainlink Automation swap to maintain your 50/50 portfolio weight.
      </div>
    </div>
  );
}
