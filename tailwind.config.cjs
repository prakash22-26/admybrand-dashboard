module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  safelist: [
    'bg-orange-100', 'text-orange-700', 'dark:bg-orange-950', 'dark:text-orange-400',
    'bg-teal-100', 'text-teal-700', 'dark:bg-teal-950', 'dark:text-teal-400',
  ],
  theme: {
    extend: {fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },},
  },
  plugins: [],
  darkMode: 'class',
};