import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function ExpenseTrends({ expenses }) {
  const grouped = expenses.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + Number(cur.price);
    return acc;
  }, {});

  const data = Object.keys(grouped).map((k) => ({ category: k, amount: grouped[k] }));

  return (
    <div className="chart-card">
      {data.length === 0 ? (
        <div className="empty-chart">No data</div>
      ) : (
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="category" type="category" width={100} />
            <Tooltip />
            <Bar dataKey="amount" radius={[10, 10, 10, 10]} fill="#7b6fc2" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
