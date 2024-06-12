/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {         'custom-blue': '0 4px 6px -1px rgba(59, 104, 147, 0.5), 0 2px 4px -1px rgba(59, 104, 147, 0.3)', },
    },
  },
  plugins: [],
}