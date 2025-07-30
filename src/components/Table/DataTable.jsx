export default function DataTable() {
  return (
    <div className="overflow-x-auto rounded-3xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wide">
          <tr>
            <th className="px-8 py-4">Name</th>
            <th className="px-8 py-4">Email</th>
            <th className="px-8 py-4">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors duration-300 cursor-pointer">
            <td className="px-8 py-5 whitespace-nowrap font-medium">John Doe</td>
            <td className="px-8 py-5 whitespace-nowrap">john@example.com</td>
            <td className="px-8 py-5 whitespace-nowrap">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-300">
                Active
              </span>
            </td>
          </tr>
          <tr className="hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors duration-300 cursor-pointer">
            <td className="px-8 py-5 whitespace-nowrap font-medium">Jane Smith</td>
            <td className="px-8 py-5 whitespace-nowrap">jane@example.com</td>
            <td className="px-8 py-5 whitespace-nowrap">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-300">
                Inactive
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
