/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  screens: {
    "md-lg": { min: "1024px", max: "1120px" }, // 1024px~1120px 구간
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
