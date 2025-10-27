import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#8e44ad", "#f39c12", "#f1c40f"]; // purple, orange, yellow

export default function ExpenseSummary({ expenses }) {
  const grouped = expenses.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + Number(cur.price);
    return acc;
  }, {});

  const data = Object.keys(grouped).map((k) => ({ name: k, value: grouped[k] }));

  return (
    <div className="chart-card">
      {data.length === 0 ? (
        <div className="empty-chart">No data</div>
      ) : (
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {data.map((entry, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
