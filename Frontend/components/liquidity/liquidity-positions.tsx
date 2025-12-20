import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LiquidityPositions = () => {
  const positions = [
    {
      id: "1",
      pool: "ETH/USDC Pool",
      tokens: [
        { symbol: "ETH", balance: "10.5" },
        { symbol: "USDC", balance: "21,000" }
      ],
      share: "15.2%",
      feesEarned: "$245.67",
      apr: "12.5%"
    },
    {
      id: "2",
      pool: "WBTC/ETH Pool",
      tokens: [
        { symbol: "WBTC", balance: "2.1" },
        { symbol: "ETH", balance: "42.3" }
      ],
      share: "8.7%",
      feesEarned: "$156.23",
      apr: "8.3%"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Liquidity Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {positions.map((position) => (
            <div key={position.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{position.pool}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span>Share: {position.share}</span>
                    <span>APR: {position.apr}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Fees Earned</div>
                  <div className="font-medium text-green-600">{position.feesEarned}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {position.tokens.map((token, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-2 bg-zinc-50 dark:bg-zinc-800 rounded">
                    <span className="text-xs font-medium">{token.symbol}</span>
                    <span className="text-sm">{token.balance}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Add</Button>
                <Button variant="outline" className="flex-1">Remove</Button>
                <Button variant="outline" className="flex-1">Claim Fees</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};