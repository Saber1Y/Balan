"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const SwapInterface = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("USDC");

  const tokens = ["ETH", "USDC", "WBTC", "DAI", "LINK"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Swap</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">From</label>
          <div className="flex gap-2">
            <select 
              value={fromToken}
              onChange={(e) => setFromToken(e.target.value)}
              className="p-2 border rounded-md min-w-[100px]"
            >
              {tokens.map(token => (
                <option key={token} value={token}>{token}</option>
              ))}
            </select>
            <Input
              type="number"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="icon">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </Button>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">To</label>
          <div className="flex gap-2">
            <select 
              value={toToken}
              onChange={(e) => setToToken(e.target.value)}
              className="p-2 border rounded-md min-w-[100px]"
            >
              {tokens.map(token => (
                <option key={token} value={token}>{token}</option>
              ))}
            </select>
            <Input
              type="number"
              placeholder="0.0"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="flex-1"
            />
          </div>
        </div>

        {fromAmount && (
          <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
            <div className="flex justify-between text-sm">
              <span>Price Impact</span>
              <span className="text-green-600">0.1%</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>Minimum Received</span>
              <span>{toAmount || "0.0"} {toToken}</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>Network Fee</span>
              <span>0.001 ETH</span>
            </div>
          </div>
        )}

        <Button className="w-full" size="lg">
          {fromAmount ? "Swap" : "Enter Amount"}
        </Button>
      </CardContent>
    </Card>
  );
};