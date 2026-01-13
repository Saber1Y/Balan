"use client";

import { useState } from "react";
import DepositForm from "./deposit-form";
import WithdrawForm from "./withdraw-form";

export default function LiquidityTabs() {
  const [tab, setTab] = useState<"deposit" | "withdraw">("deposit");
  return (
    <div>
      <div className="flex rounded-full bg-zinc-100 w-fit mb-6">
        <button
          className={`px-8 py-2 rounded-full font-semibold text-base transition-colors ${
            tab === "deposit"
              ? "bg-white text-zinc-900 shadow"
              : "text-zinc-500"
          }`}
          onClick={() => setTab("deposit")}
        >
          Deposit
        </button>
        <button
          className={`px-8 py-2 rounded-full font-semibold text-base transition-colors ${
            tab === "withdraw"
              ? "bg-white text-zinc-900 shadow"
              : "text-zinc-500"
          }`}
          onClick={() => setTab("withdraw")}
        >
          Withdraw
        </button>
      </div>
      {tab === "deposit" ? <DepositForm /> : <WithdrawForm />}
    </div>
  );
}
