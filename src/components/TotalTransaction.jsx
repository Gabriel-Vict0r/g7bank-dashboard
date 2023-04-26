import React from "react";
import { PieChart, Pie, Legend, Cell, Text } from "recharts";
import {
  CardTransaction,
  SubTitle,
  Date,
  WrapperTransaction,
} from "./pages/Dashboard/Dashboard.style";
const data = [
  { name: "In", value: 900, color: "#0cce8d" },
  { name: "Out", value: 600, color: "#2d42ba" },
];
const TotalTransaction = () => {
  return (
    <CardTransaction>
      <SubTitle>Transaction</SubTitle>
      <Date>Yearly</Date>
      <WrapperTransaction>
        <PieChart width={370} height={280} >
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
            textRendering={{fill: '#000'}}

          >
            {data.map((entry) => (
              <Cell
                nameKey={entry.name}
                dataKey={entry.value}
                fill={entry.color}
                color="#000"
                textAnchor="middle"
              />
            ))}
          </Pie>
          <Legend
            iconSize={17}
            iconType="circle"
            layout="horizontal"
            height={40}
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ padding: 15}}
          />
        </PieChart>
      </WrapperTransaction>
    </CardTransaction>
  );
};

export default TotalTransaction;
