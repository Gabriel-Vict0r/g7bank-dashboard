import React from "react";
import { PieChart, Pie } from "recharts";
import {
  CardTransaction,
  SubTitle,
  Date,
} from "./pages/Dashboard/Dashboard.style";
const data = [
  { name: "In", value: 900 },
  { name: "Out", value: 600 },
];
const TotalTransaction = () => {
  return (
    <CardTransaction>
      <SubTitle>Transaction</SubTitle>
      <Date>Yearly</Date>
      <PieChart width={500} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#2d42ba"
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          fill="#0cce8d"
          label
        />
      </PieChart>
    </CardTransaction>
  );
};

export default TotalTransaction;
