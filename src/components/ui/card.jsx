export function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        shadow-sm hover:shadow-md
        transition-shadow duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div
      className={`
        p-5 sm:p-6
        flex flex-col gap-3
        text-sm sm:text-base
        ${className}
      `}
    >
      {children}
    </div>
  );
}
