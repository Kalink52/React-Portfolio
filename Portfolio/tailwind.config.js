/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        // dark mode colors?
        black: "#222831",
        "dark-gray": "#31363F",
        "light-blue": "#76ABAE",
        white: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
