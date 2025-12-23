import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdOutlineLocalGasStation } from "react-icons/md";

export const PortfolioValue = () => {
  const portfolioData = {
    totalValue: "$125,432.56",
    change24h: "+$2,345.67 (+1.9%)",
    change7d: "+$8,234.12 (+7.0%)",

    lastUpdated: "2024-06-15 14:30 UTC",
    rebalanceTime: "4h5m",
    gasEstimate: "12.34 gwei",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Portfolio Value</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div>
            <div className="text-3xl  font-bold">
              {portfolioData.totalValue}
            </div>
            <div className="text-green-600 text-sm mt-1">
              {portfolioData.change24h}
            </div>
            <div className="text-green-600 text-sm">
              {portfolioData.change7d}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full bg-green-200 border border-none text-black text-xs p-2">
                <MdCheckCircleOutline className="inline-block mr-1" />
                Synced
              </span>

              <p>Last Updated: {portfolioData.lastUpdated}</p>
            </div>
          </div>

          <hr className="my-4" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm">Next Auto Rebalance</div>
              <div className="font-medium">{portfolioData.rebalanceTime}</div>
            </div>
            <div>
              <div className="text-sm">Gas Estimate</div>
              <div className="font-medium">
                <MdOutlineLocalGasStation className="inline-block mr-1" />
                {portfolioData.gasEstimate}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
