import { useEffect, useState } from "react";
import OverviewCard from "../components/Cards/OverviewCard";
import LineChartComponent from "../components/Charts/LineChart";
import BarChartComponent from "../components/Charts/BarChart";
import PieChartComponent from "../components/Charts/PieChart";
import DataTable from "../components/Table/DataTable";
import ExportButtons from "../components/Table/ExportButtons";
import DateRangeFilter from "../components/Filters/DateRangeFilter";
import ThemeToggle from "../components/ThemeToggle";
import ChartSkeleton from "../components/Skeletons/ChartSkeleton";
import FadeIn from "../components/Animations/FadeIn";
import { chartData as mockChartData, overviewData } from "../data/mockData";

const transformToPie = (data) => {
  return data.map((d) => ({ label: d.day, value: d.value }));
};

const mockUsers = [
  { name: "Alice", email: "alice@example.com", status: "Active" },
  { name: "Bob", email: "bob@example.com", status: "Inactive" },
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [filter, setFilter] = useState({
    startDate: "2025-07-01",
    endDate: "2025-07-29",
  });

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setChartData(mockChartData);
      setTableData(mockUsers);
      setLoading(false);
    }, 1000);

    const interval = setInterval(() => {
      setChartData((prev) =>
        prev.map((item) => ({
          ...item,
          value: Math.floor(Math.random() * 800 + 100),
        }))
      );
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = localStorage.getItem("theme") || "light";
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen animate-gradient-x"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(to right, #494848ff, #262525ff)" 
            : "linear-gradient(to right, #eff6ff, #e0e7ff)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Navbar */}
      <div className="w-full bg-[#1e293b]  shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <ThemeToggle />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-center text-[white] flex-1">
            ADmyBRAND Insights
          </h1>
          <div className="flex-1" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 p-6 pt-10">
        {/* Overview Cards */}
        <FadeIn>
          <div className="flex flex-wrap justify-between gap-6 m-[10px]">
            {overviewData.map((item, index) => (
              <div key={index} className="flex-1 min-w-[240px] m-[10px] rounded-[20px]" style={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}>
                <OverviewCard
                  title={item.title}
                  value={item.value}
                  icon={item.icon}
                  color={item.color}
                />
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white dark:text-gray-200">
              📅 <span>Filter by Date</span>
            </h2>
            <DateRangeFilter
              startDate={filter.startDate}
              endDate={filter.endDate}
              onChange={setFilter}
            />
          </div>
        </FadeIn>

        {/* Line and Bar Charts */}
        <div className=" flex flex-col sm:flex-row flex-wrap justify-between gap-6">
          <FadeIn delay={0.3} className="flex-1 m-[10px]">
            <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/30 border-2 border-black dark:border-white rounded-[10px] p-6 h-full m-[10px]" style={{ boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(0, 0, 0, 0.1)" }}>
              <h2 className="text-xl font-semibold text-white dark:text-gray-100 mb-4">
                📈 Line Chart — Real-time Metrics
              </h2>
              {loading ? <ChartSkeleton /> : <LineChartComponent data={chartData} />}
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="flex-1 m-[10px] ">
            <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/30 border-2 border-black dark:border-white rounded-[10px] p-6 h-full m-[10px]" style={{ boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(0, 0, 0, 0.1)" }}>
              <h2 className="text-xl font-semibold text-white dark:text-gray-100 mb-4">
                📊 Bar Chart — Engagement Overview
              </h2>
              {loading ? <ChartSkeleton /> : <BarChartComponent data={chartData} />}
            </div>
          </FadeIn>
        </div>

        {/* Pie Chart */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-6">
          <FadeIn delay={0.5} className="flex-1 m-[10px]">
            <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/30 border-2 border-black dark:border-white rounded-[10px] p-6 h-full m-[10px]" style={{ boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(0, 0, 0, 0.1)" }}>
              <h2 className="text-xl font-semibold text-white dark:text-gray-100 mb-4">
                🧁 Pie Chart — Source Split
              </h2>
              {loading ? (
                <ChartSkeleton />
              ) : (
                <PieChartComponent data={transformToPie(chartData)} />
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.6} className="flex-1 m-[10px]">
            <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/30 border-2 border-black dark:border-white rounded-[10px] p-6 h-full m-[10px]" style={{ boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(0, 0, 0, 0.1)" }}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white dark:text-gray-100">
                  📋 User Table
                </h2>
                <ExportButtons data={tableData} />
              </div>
              <DataTable data={tableData} />
            </div>
          </FadeIn>
        </div>
      </div>
      <footer className="bg-[#1e293b] text-[white] text-center p-[20px] mt-[10px]">
        © 2025 ADmyBRAND. All rights reserved.
      </footer>
    </div>
  );
}
