"use client";

import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

interface ChartProps {
  data: any[];
  dataKey: string;
  name?: string;
  color?: string;
  height?: number;
}

export const RiskChart: React.FC<ChartProps> = ({ 
  data, 
  dataKey, 
  name = 'Risk Analysis', 
  color = 'var(--chart-color-1)',
  height = 300 
}) => {
  return (
    <div style={{ width: '100%', height: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="var(--text-secondary)" 
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="var(--text-secondary)" 
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--bg-color)', 
              border: '1px solid var(--border-color)',
              borderRadius: '0',
            }}
            itemStyle={{ color: 'var(--text-color)' }}
          />
          <Area 
            type="monotone" 
            dataKey={dataKey} 
            name={name}
            stroke={color} 
            fill={color} 
            fillOpacity={0.2} 
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
