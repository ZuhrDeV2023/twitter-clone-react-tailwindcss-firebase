/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      screens: {
        mobile: "none",
        tablet: "none",
        desktop: "none",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1130px",
      "2xl": "1630px",
      "3xl": "1930px",
    },
  },
  plugins: [],
};
