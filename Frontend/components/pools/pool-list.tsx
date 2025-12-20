import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Pool {
  id: string;
  name: string;
  tokens: { symbol: string; balance: string }[];
  apr: string;
  totalLiquidity: string;
  volume24h: string;
}

const mockAllPools: Pool[] = [
  {
    id: "1",
    name: "ETH/USDC Pool",
    tokens: [
      { symbol: "ETH", balance: "1,250.5" },
      { symbol: "USDC", balance: "2,500,000" }
    ],
    apr: "12.5%",
    totalLiquidity: "$5,000,000",
    volume24h: "$750,000",
  },
  {
    id: "2",
    name: "WBTC/ETH Pool", 
    tokens: [
      { symbol: "WBTC", balance: "102.2" },
      { symbol: "ETH", balance: "2,054.4" }
    ],
    apr: "8.3%",
    totalLiquidity: "$7,500,000",
    volume24h: "$1,250,000",
  },
  {
    id: "3",
    name: "DAI/USDC Pool",
    tokens: [
      { symbol: "DAI", balance: "1,000,000" },
      { symbol: "USDC", balance: "1,000,000" }
    ],
    apr: "5.2%",
    totalLiquidity: "$2,000,000",
    volume24h: "$500,000",
  }
];

export const PoolList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Pools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAllPools.map((pool) => (
            <div key={pool.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{pool.name}</h3>
                  <div className="flex gap-2 mt-1">
                    {pool.tokens.map((token, index) => (
                      <span key={index} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm">
                        {token.symbol}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{pool.apr}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">APR</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Total Liquidity</div>
                  <div className="font-medium">{pool.totalLiquidity}</div>
                </div>
                <div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">24h Volume</div>
                  <div className="font-medium">{pool.volume24h}</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1">Add Liquidity</Button>
                <Button variant="outline" className="flex-1">Swap</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};