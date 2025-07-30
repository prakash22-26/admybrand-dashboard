import { TrendingUp, Users, BarChart2, Activity } from "lucide-react";

// 📊 Weekly chart sample data
export const chartData = [
  { day: "Mon", value: 400 },
  { day: "Tue", value: 300 },
  { day: "Wed", value: 500 },
  { day: "Thu", value: 200 },
  { day: "Fri", value: 700 },
];

// 📦 Overview metrics for top cards
export const overviewData = [
  {
    title: "Revenue",
    value: "$12,340",
    icon: TrendingUp,
    color: "green", // Tailwind green-700
  },
  {
    title: "Users",
    value: "1,200",
    icon: Users,
    color: "blue", // Tailwind blue-700
  },
  {
    title: "Conversions",
    value: "320",
    icon: BarChart2,
    color: "yellow", // Tailwind yellow-600
  },
  {
    title: "Growth %",
    value: "15%",
    icon: Activity,
    color: "purple", // Tailwind purple-700
  },
];
