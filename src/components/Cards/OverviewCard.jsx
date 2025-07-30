import { Card, CardContent } from "../ui/card";

const colorMap = {
  green: "text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-950",
  blue: "text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-950",
  yellow: "text-yellow-700 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-950",
  purple: "text-purple-700 bg-purple-100 dark:text-purple-400 dark:bg-purple-950",
  orange: "text-orange-700 bg-orange-100 dark:text-orange-400 dark:bg-orange-950",
  teal: "text-teal-700 bg-teal-100 dark:text-teal-400 dark:bg-teal-950",
};

export default function OverviewCard({ title, value, icon: Icon, color = "green" }) {
  const iconClasses = `
    ${colorMap[color] || "text-gray-600 bg-gray-200 dark:text-gray-300 dark:bg-gray-800"}
    p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm
  `;

  return (
    <Card className="w-full bg-white dark:bg-gray-900 rounded-[20px] shadow hover:shadow-lg transition-all duration-300">
      <CardContent className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          {Icon && <div className={iconClasses}><Icon className="w-6 h-6" /></div>}
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
              {title}
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white leading-snug">
              {value}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
