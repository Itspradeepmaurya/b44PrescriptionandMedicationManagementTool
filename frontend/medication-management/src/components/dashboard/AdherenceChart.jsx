import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function AdherenceChart() {
  const data = [
    { day: 'Mon', taken: 4, missed: 0, adherence: 100 },
    { day: 'Tue', taken: 3, missed: 1, adherence: 75 },
    { day: 'Wed', taken: 4, missed: 0, adherence: 100 },
    { day: 'Thu', taken: 4, missed: 0, adherence: 100 },
    { day: 'Fri', taken: 3, missed: 1, adherence: 75 },
    { day: 'Sat', taken: 4, missed: 0, adherence: 100 },
    { day: 'Sun', taken: 4, missed: 0, adherence: 100 },
  ];

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-md shadow-md">
          <p className="font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}{entry.name === 'adherence' ? '%' : ''}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[300px] w-full" style={{ 
      '--color-taken': '#14b8a6', 
      '--color-missed': '#ef4444', 
      '--color-adherence': '#6366f1' 
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="taken" fill="var(--color-taken)" name="Taken" yAxisId="left" />
          <Bar dataKey="missed" fill="var(--color-missed)" name="Missed" yAxisId="left" />
          <Bar dataKey="adherence" fill="var(--color-adherence)" name="Adherence %" yAxisId="right" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdherenceChart;