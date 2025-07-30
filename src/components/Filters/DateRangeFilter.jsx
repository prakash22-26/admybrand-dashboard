export default function DateRangeFilter({ startDate, endDate, onChange }) {
  return (
    <div className="flex items-center gap-4 text-sm">
      <input
        type="date"
        value={startDate}
        onChange={(e) => onChange({ startDate: e.target.value, endDate })}
        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-[10px] p-[6px] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
      />
      <span className="text-gray-500 dark:text-gray-400 m-[10px]">to</span>
      <input
        type="date"
        value={endDate}
        onChange={(e) => onChange({ startDate, endDate: e.target.value })}
        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-[10px] p-[6px] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
      />
    </div>
  );
}
