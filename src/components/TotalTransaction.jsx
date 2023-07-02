import React from "react";
import { PieChart, Pie, Legend, Cell, Text } from "recharts";
import {
  CardTransaction,
  SubTitle,
  Date,
  WrapperTransaction,
} from "./pages/Dashboard/Dashboard.style";
const data = [
  {
    name: "In",
    value: 900,
    color: "#0DCB8B",
  },
  { name: "Out", value: 600, color: "#2D43BB" },
];
const colors = [
  { start: "#093f2d", end: "#0DCB8B" },
  { start: "#141e4e", end: "#2D43BB" },
];
const renderColorfulLengedText = (value, entry) => {
  const { color } = entry;
  return <span style={{ color }}>{value}</span>;
};
const TotalTransaction = () => {
  return (
    <CardTransaction>
      <SubTitle>Transaction</SubTitle>
      <Date>Yearly</Date>
      <WrapperTransaction>
        <PieChart width={440} height={280}>
          <defs>
            {data.map((entry, index) => (
              <radialGradient id={`myGradient${index}`}>
                <stop
                  offset="0%"
                  stopColor={colors[index % colors.length].start}
                />
                <stop
                  offset="100%"
                  stopColor={colors[index % colors.length].end}
                />
              </radialGradient>
            ))}
          </defs>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="60%"
            cy="50%"
            stroke="none"
            innerRadius={50}
            label
            labelLine={true}
            strokeLinejoin="miter"
            strokeWidth={2}
            textLength={40}
            fill="#ffff"
          >
            {data.map((entry, index) => (
              <Cell
                nameKey={entry.name}
                dataKey={entry.value}
                fill={`url(#myGradient${index})`}
                textAnchor="middle"
                strokeLinecap="butt"
                color="#fff"
              />
            ))}
          </Pie>
          <Legend
            iconSize={17}
            iconType="circle"
            layout="vertical"
            height={40}
            align="right"
            verticalAlign="bottom"
            wrapperStyle={{ paddingBottom: 18, paddingLeft: 28 }}
            formatter={renderColorfulLengedText}
          />
        </PieChart>
      </WrapperTransaction>
    </CardTransaction>
  );
};
export default TotalTransaction;
