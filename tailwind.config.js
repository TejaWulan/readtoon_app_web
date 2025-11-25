/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kustom-e9eaff': '#E9EAFFF',
      },
    },
  },
  plugins: [],
}