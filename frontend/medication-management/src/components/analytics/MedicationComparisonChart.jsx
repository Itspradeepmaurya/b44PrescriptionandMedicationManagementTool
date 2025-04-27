import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MedicationComparisonChart() {
  const data = [
    { name: 'Lisinopril', adherence: 98, target: 100 },
    { name: 'Atorvastatin', adherence: 95, target: 100 },
    { name: 'Metformin', adherence: 85, target: 100 },
    { name: 'Amlodipine', adherence: 90, target: 100 },
    { name: 'Levothyroxine', adherence: 88, target: 100 },
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
    <div className="h-[300px] w-full" style={{ 
      '--color-adherence': '#14b8a6', 
      '--color-target': '#6366f1' 
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="adherence" fill="var(--color-adherence)" name="Actual Adherence %" radius={[4, 4, 0, 0]} />
          <Bar dataKey="target" fill="var(--color-target)" name="Target Adherence %" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MedicationComparisonChart;