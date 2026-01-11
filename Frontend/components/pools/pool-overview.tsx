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

// const mockPools: Pool[] = [
//   {
//     id: "1",
//     name: "ETH/USDC Pool",
//     tokens: [
//       { symbol: "ETH", balance: "125.5" },
//       { symbol: "USDC", balance: "250,000" },
//     ],
//     apr: "12.5%",
//     totalLiquidity: "$500,000",
//     volume24h: "$75,000",
//     fees24h: "$225",
//   },
// ];

export const PoolOverview = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-4 text-black">
        <div className="flex gap-3">
          <p>Name</p>
          <div className="flex flex-col">
            <span>WETH</span>
            <span>Wrapped Ether</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span>4.50 WETH</span>
          <span>= $8.500</span>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden">
        <p>Allocation</p>
      </div>
    </section>
  );
};
