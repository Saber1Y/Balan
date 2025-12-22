import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PortfolioValue = () => {
  const portfolioData = {
    totalValue: "$125,432.56",
    change24h: "+$2,345.67 (+1.9%)",
    change7d: "+$8,234.12 (+7.0%)",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Value</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="text-3xl text-primary font-bold">{portfolioData.totalValue}</div>
            <div className="text-green-600 text-sm mt-1">
              {portfolioData.change24h}
            </div>
            <div className="text-green-600 text-sm">
              {portfolioData.change7d}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm">Liquidity Positions</div>
              <div className="font-medium">$95,234.12</div>
            </div>
            <div>
              <div className="text-sm">Wallet Balance</div>
              <div className="font-medium">$30,198.44</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
