import { CardActivity, SubTitle } from "./pages/Dashboard/Dashboard.style";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Surface,
} from "recharts";

const data = [
  {
    name: "Sun",
    in: 4000,
    out: 1200,
  },
  {
    name: "Mon",
    in: 5000,
    out: 3000,
  },
  {
    name: "Tue",
    in: 3000,
    out: 1500,
  },
  {
    name: "Wed",
    in: 4500,
    out: 5000,
  },
  {
    name: "Thu",
    in: 1000,
    out: 500,
  },
  {
    name: "Fri",
    in: 7000,
    out: 5500,
  },
  {
    name: "Sat",
    in: 1000,
    out: 2000,
  },
];

const Activity = ({ subtitle }) => {
  return (
    <CardActivity>
      <SubTitle>{subtitle}</SubTitle>
      <BarChart
        width={700}
        height={400}
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3"
          strokeOpacity={0.1}
        />
        <XAxis dataKey="name" tickMargin={15} />
        <YAxis tickMargin={15} />
        <Tooltip />
        <Legend
          iconSize={17}
          iconType="circle"
          layout="horizontal"
          margin={{ top: 25, left: 0, right: 0, bottom: 0 }}
          height={40}
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{padding: 17}}
        />
        <Bar dataKey="in" fill="#0cce8d" radius={[100, 100, 0, 0]} />
        <Bar dataKey="out" fill="#2d42ba" radius={[100, 100, 0, 0]} />
      </BarChart>
    </CardActivity>
  );
};

export default Activity;
