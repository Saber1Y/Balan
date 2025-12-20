import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { date: 'Jan 1', value: 100000 },
  { date: 'Jan 7', value: 105000 },
  { date: 'Jan 14', value: 108000 },
  { date: 'Jan 21', value: 115000 },
  { date: 'Jan 28', value: 112000 },
  { date: 'Feb 4', value: 118000 },
  { date: 'Feb 11', value: 125432 }
];

export const PerformanceChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};