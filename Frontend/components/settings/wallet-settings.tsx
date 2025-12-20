import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const WalletSettings = () => {
  const connectedWallet = {
    address: "0x1234...5678",
    network: "Ethereum Mainnet",
    balance: "2.5 ETH"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">Connected Wallet</div>
          <div className="font-medium">{connectedWallet.address}</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            {connectedWallet.network} • {connectedWallet.balance}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Default Network</label>
          <select className="w-full p-2 border rounded-md">
            <option>Ethereum Mainnet</option>
            <option>Polygon</option>
            <option>Arbitrum</option>
            <option>Optimism</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Gas Speed</label>
          <select className="w-full p-2 border rounded-md">
            <option>Slow</option>
            <option>Standard</option>
            <option>Fast</option>
            <option>Instant</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <input type="checkbox" id="expert" className="rounded" />
          <label htmlFor="expert" className="text-sm">Expert mode</label>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">Disconnect</Button>
          <Button variant="outline" className="flex-1">Change Wallet</Button>
        </div>
      </CardContent>
    </Card>
  );
};