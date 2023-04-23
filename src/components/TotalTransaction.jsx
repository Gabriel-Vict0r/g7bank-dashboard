import { colors } from "@mui/material";
import React from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";
import {
  CardTransaction,
  SubTitle,
  Date,
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
      <PieChart width={370} height={250}>
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
          
        >
          {data.map((entry, index) => (
            <Cell
              nameKey={entry.name}
              dataKey={entry.value}
              fill={entry.color}
            />
          ))}
        </Pie>
      </PieChart>
    </CardTransaction>
  );
};

export default TotalTransaction;
