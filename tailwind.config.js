/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'White': "#ffffff",
        'Light-gray': "#d6e2f0",
        'Grayish-blue': "#7b879d",
        'Dark-blue': "#1f3251"
      },
    },
  },
  plugins: [],
};
