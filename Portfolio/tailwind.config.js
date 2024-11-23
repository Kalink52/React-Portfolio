/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        // dark mode colors?
        black: "#222831",
        "dark-gray": "#31363F",
        "light-blue": "#76ABAE",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
});
