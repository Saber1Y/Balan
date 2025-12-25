"use client";

import { PieChart, Pie, Label } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

// #endregion
const MyPie = () => (
  <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    outerRadius="80%"
    innerRadius="60%"
    isAnimationActive={false}
  />
);

export default function PieChartInGrid() {
  return (
    <div style={{ width: "100%", minHeight: "" }}>
      <PieChart
        responsive
        style={{
          gridColumn: "1 / 4",
          gridRow: "3 / 4",
          border: "1px solid #ddd",
          // height: "100%",
          // maxHeight: '200px',
          aspectRatio: 1,
          margin: "0 auto",
        }}
      >
        <MyPie />
        <Label position="center" fill="#666">
          3x1 cell
        </Label>
        <RechartsDevtools />
      </PieChart>
    </div>
  );
}
