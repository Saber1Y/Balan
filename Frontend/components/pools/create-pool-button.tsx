"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";

export const CreatePoolButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Create New Pool</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Create New Pool</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Pool Type</label>
            <select className="w-full p-2 border rounded-md">
              <option>Weighted Pool</option>
              <option>Stable Pool</option>
              <option>MetaStable Pool</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Token A</label>
            <input
              type="text"
              placeholder="0x..."
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Token B</label>
            <input
              type="text"
              placeholder="0x..."
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Swap Fee (%)
            </label>
            <input
              type="number"
              placeholder="0.1"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <Button className="w-full" onClick={() => setIsOpen(false)}>
            Create Pool
          </Button>
        </div>
      </Modal>
    </>
  );
};
