/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      maxsm: "400px",
      sm: "480px",
      md: "768px",
      lg: "	1024px",
      xl: "1280px",
      Twoxl: "1536px",
    },
    colors: {
      colorSiderbar: "#231b2e",
      colorPlayMusic: "#170f23",
      text1: "#d5d4d5",
      text2: "#6d6875",
      white: "#fff",
      primary: "#9b4de0",
      gray: "#2e2739",
      borderT: "#2f2739",
      activeLi: "#393243",
      borderL: "#9b4de0",
      yellow: "#ffdb00",
      iconHeader: "#3f3949",
      bgPoper: "#34224f",
      bgTooltip: "hsl(0deg 0% 14%)",
    },
    extend: {},
  },
  plugins: [],
};
