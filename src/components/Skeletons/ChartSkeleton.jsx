export default function ChartSkeleton({ height = "h-72" }) {
  return (
    <div
      className={`w-full ${height} rounded-xl animate-pulse bg-gradient-to-r
        from-gray-200 via-gray-300 to-gray-200 
        dark:from-gray-700 dark:via-gray-600 dark:to-gray-700`}
    />
  );
}
