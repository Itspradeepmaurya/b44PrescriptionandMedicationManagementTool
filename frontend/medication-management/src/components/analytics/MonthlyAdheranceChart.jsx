import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MonthlyAdherenceChart() {
  const data = [
    { date: 'Apr 1', adherence: 100 },
    { date: 'Apr 2', adherence: 100 },
    { date: 'Apr 3', adherence: 100 },
    { date: 'Apr 4', adherence: 75 },
    { date: 'Apr 5', adherence: 75 },
    { date: 'Apr 6', adherence: 100 },
    { date: 'Apr 7', adherence: 100 },
    { date: 'Apr 8', adherence: 100 },
    { date: 'Apr 9', adherence: 100 },
    { date: 'Apr 10', adherence: 75 },
    { date: 'Apr 11', adherence: 100 },
    { date: 'Apr 12', adherence: 100 },
    { date: 'Apr 13', adherence: 100 },
    { date: 'Apr 14', adherence: 75 },
    { date: 'Apr 15', adherence: 100 },
    { date: 'Apr 16', adherence: 100 },
    { date: 'Apr 17', adherence: 100 },
    { date: 'Apr 18', adherence: 100 },
    { date: 'Apr 19', adherence: 75 },
    { date: 'Apr 20', adherence: 100 },
    { date: 'Apr 21', adherence: 100 },
    { date: 'Apr 22', adherence: 100 },
    { date: 'Apr 23', adherence: 100 },
    { date: 'Apr 24', adherence: 75 },
    { date: 'Apr 25', adherence: 100 },
    { date: 'Apr 26', adherence: 100 },
    { date: 'Apr 27', adherence: 100 },
    { date: 'Apr 28', adherence: 100 },
    { date: 'Apr 29', adherence: 100 },
    { date: 'Apr 30', adherence: 100 },
  ];

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-md shadow-md">
          <p className="font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[300px] w-full" style={{ '--color-adherence': '#14b8a6' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tickFormatter={(value) => {
              // Only show every 5th date to avoid crowding
              const dateIndex = data.findIndex((item) => item.date === value);
              return dateIndex % 5 === 0 ? value : "";
            }}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="adherence"
            stroke="var(--color-adherence)"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Adherence %"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyAdherenceChart;