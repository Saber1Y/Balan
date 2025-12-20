import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Pool {
  id: string;
  name: string;
  tokens: { symbol: string; balance: string }[];
  apr: string;
  totalLiquidity: string;
  volume24h: string;
  fees24h: string;
}

const mockPools: Pool[] = [
  {
    id: "1",
    name: "ETH/USDC Pool",
    tokens: [
      { symbol: "ETH", balance: "125.5" },
      { symbol: "USDC", balance: "250,000" }
    ],
    apr: "12.5%",
    totalLiquidity: "$500,000",
    volume24h: "$75,000",
    fees24h: "$225"
  },
  {
    id: "2", 
    name: "WBTC/ETH Pool",
    tokens: [
      { symbol: "WBTC", balance: "10.2" },
      { symbol: "ETH", balance: "205.4" }
    ],
    apr: "8.3%",
    totalLiquidity: "$750,000",
    volume24h: "$125,000",
    fees24h: "$375"
  }
];

export const PoolOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Pools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockPools.map((pool) => (
            <div key={pool.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">{pool.name}</h3>
                <div className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  <span>Liquidity: {pool.totalLiquidity}</span>
                  <span>APR: {pool.apr}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-zinc-600 dark:text-zinc-400">24h Volume</div>
                <div className="font-medium">{pool.volume24h}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};