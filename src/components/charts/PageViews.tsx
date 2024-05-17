'use client';

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const pageViews = [
  {
    name: 'Jan',
    homePage: 4000,
    aboutPage: 2400,
  },
  {
    name: 'Feb',
    homePage: 3000,
    aboutPage: 2210,
  },
  {
    name: 'Mar',
    homePage: 2000,
    aboutPage: 2290,
  },
  {
    name: 'Apr',
    homePage: 2780,
    aboutPage: 2000,
  },
  {
    name: 'May',
    homePage: 1890,
    aboutPage: 2181,
  },
  {
    name: 'Jun',
    homePage: 2390,
    aboutPage: 2500,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm text-blue-400">
            Home Page:
            <span className="ml-2">{payload[0].value}</span>
          </p>
          <p className="text-sm text-indigo-400">
            About Page:
            <span className="ml-2">{payload[1].value}</span>
          </p>
        </div>
      );
    }
}


export const PageViewsChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={pageViews}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />

        <Legend />

        <Area
          type="monotone"
          dataKey="homePage"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />

        <Area
          type="monotone"
          dataKey="aboutPage"
          stroke="#7c3aed"
          fill="#8b5cf6"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};



