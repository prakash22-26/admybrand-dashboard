import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function BarChartComponent({ data }) {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
        >
          {/* Removed CartesianGrid for cleaner background */}
          <XAxis
            dataKey="day"
            tick={{ fill: '#000000', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#000000', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#000000",
              borderRadius: "0.5rem",
              border: "2px solid #1f2937",
              color: "#1f2937",
              fontSize: "14px"
            }}
            itemStyle={{ color: "#4b5563" }}
          />
          <Bar
            dataKey="value"
            radius={[6, 6, 0, 0]}
            fill="#6366f1" // Tailwind indigo-500
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
