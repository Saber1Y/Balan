import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const UserSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Theme</label>
          <select className="w-full p-2 border rounded-md">
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Currency</label>
          <select className="w-full p-2 border rounded-md">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Slippage Tolerance</label>
          <input 
            type="number" 
            defaultValue="0.5" 
            step="0.1"
            className="w-full p-2 border rounded-md" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Transaction Deadline</label>
          <input 
            type="number" 
            defaultValue="20" 
            className="w-full p-2 border rounded-md" 
          />
        </div>
        
        <div className="flex items-center gap-2">
          <input type="checkbox" id="notifications" className="rounded" />
          <label htmlFor="notifications" className="text-sm">Enable notifications</label>
        </div>
        
        <Button className="w-full">Save Settings</Button>
      </CardContent>
    </Card>
  );
};