"use client";

import { PieChart, Pie, Label, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { name: "WETH", value: 52, fill: "#2563eb" }, // blue-600
  { name: "USDC", value: 48, fill: "#3b82f6" }, // blue-500
];

const renderCenterLabel = () => {
  return (
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
      <tspan x="50%" dy="-0.5em" fontSize="16" fill="#888" fontWeight="500">
        TARGET
      </tspan>
      <tspan x="50%" dy="1.2em" fontSize="24" fill="#2563eb" fontWeight="bold">
        50/50
      </tspan>
    </text>
  );
};

export default function PieChartInGrid() {
  return (
    <Card className="rounded-2xl shadow-sm p-6 bg-white flex flex-col gap-6 items-center">
      <div style={{ width: 220, height: 220, margin: "0 auto" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius="100%"
              innerRadius="75%"
              startAngle={90}
              endAngle={-270}
              isAnimationActive={false}
              stroke="none"
              labelLine={false}
              label={false}
            >
              <Label content={renderCenterLabel} position="center" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-8 w-full mt-2">
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ background: data[0].fill }}
          ></span>
          <span className="text-zinc-900 font-medium">WETH 52%</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ background: data[1].fill }}
          ></span>
          <span className="text-zinc-900 font-medium">USDC 48%</span>
        </div>
      </div>
    </Card>
  );
}
