import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";

export const WalletConnector = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = (wallet: string) => {
    setWalletAddress("0x1234...5678");
    setIsConnected(true);
    setShowModal(false);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
  };

  const wallets = [
    { name: "MetaMask", icon: "🦊" },
    { name: "WalletConnect", icon: "🔗" },
    { name: "Coinbase Wallet", icon: "🔵" },
    { name: "Phantom", icon: "👻" }
  ];

  if (isConnected) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {walletAddress}
        </span>
        <Button variant="outline" size="sm" onClick={disconnectWallet}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        Connect Wallet
      </Button>
      
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-bold mb-4">Connect Wallet</h2>
        <div className="space-y-2">
          {wallets.map((wallet) => (
            <Button
              key={wallet.name}
              variant="outline"
              className="w-full justify-start"
              onClick={() => connectWallet(wallet.name)}
            >
              <span className="mr-2 text-lg">{wallet.icon}</span>
              {wallet.name}
            </Button>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md text-sm text-zinc-600 dark:text-zinc-400">
          By connecting a wallet, you agree to the Terms of Service and Privacy Policy.
        </div>
      </Modal>
    </>
  );
};