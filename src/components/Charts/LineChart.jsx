import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function LineChartComponent({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        {/* Removed CartesianGrid */}
        <XAxis dataKey="day" stroke="#000000" /> {/* optional custom color */}
        <YAxis stroke="#00000" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#6366F1" // Indigo-500
          strokeWidth={3}
          dot={{ r: 4, stroke: "#6366F1", strokeWidth: 2, fill: "white" }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
