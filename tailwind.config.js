/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
       pink: '#FE0060',
       beige: '#f4f1ec',
       blue: '#00BFFE',
       grey: "rgb(219, 219, 225)",
       mauve: "#9584ff",
       mauveBg: "rgba(106, 83, 255, 0.15)",
       textMauve: "#5E45FF",
       textBlue: "rgb(88, 184, 255)",
       green: "rgb(82, 229, 138)",
      },
      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};