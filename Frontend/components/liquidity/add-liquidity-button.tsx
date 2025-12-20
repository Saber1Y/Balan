"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";

export const AddLiquidityButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Add Liquidity
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Add Liquidity</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select Pool</label>
            <select className="w-full p-2 border rounded-md">
              <option>ETH/USDC Pool</option>
              <option>WBTC/ETH Pool</option>
              <option>DAI/USDC Pool</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">ETH Amount</label>
            <input type="number" placeholder="0.0" className="w-full p-2 border rounded-md" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">USDC Amount</label>
            <input type="number" placeholder="0.0" className="w-full p-2 border rounded-md" />
          </div>
          
          <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
            <div className="flex justify-between text-sm">
              <span>Expected Share</span>
              <span>5.2%</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>Pool Share After</span>
              <span>20.4%</span>
            </div>
          </div>
          
          <Button className="w-full" onClick={() => setIsOpen(false)}>
            Add Liquidity
          </Button>
        </div>
      </Modal>
    </>
  );
};