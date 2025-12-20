import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const PoolFilters = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Search</label>
          <Input placeholder="Search pools..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Min APR</label>
          <Input type="number" placeholder="0%" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Min Liquidity</label>
          <Input type="number" placeholder="$1000" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Pool Type</label>
          <select className="w-full p-2 border rounded-md">
            <option>All Types</option>
            <option>Weighted</option>
            <option>Stable</option>
            <option>MetaStable</option>
          </select>
        </div>
      </CardContent>
    </Card>
  );
};