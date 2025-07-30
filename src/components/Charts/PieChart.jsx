import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444']; // indigo, green, amber, red

export default function PieChartComponent({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Tooltip
          contentStyle={{
            backgroundColor: "#000000",
            borderRadius: "0.5rem",
            border: "1px solid #000000",
            color: "#1f2937",
            fontSize: "14px"
          }}
          itemStyle={{ color: "#4b5563" }}
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="label"
          cx="50%"
          cy="50%"
          outerRadius={90}
          label={({ name, percent }) =>
            `${name} (${(percent * 100).toFixed(0)}%)`
          }
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
