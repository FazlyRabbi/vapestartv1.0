/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    "postcss-preset-env",
  ],

  theme: {
    fontSize: {
      sm: "13px",
      base: "14px",
      titleSm: "15px",
      xl: "1.25rem",
    },

    fontFamily: {
      bun: ["Bungee", "cursive"],
      eco: ["Economica", "sans-serif"],
    },
  
    colors: {
      transparent: "transparent",
      primary: "#2dbad6",
      white: "#ffffff",
      matBlack: "#191919",

      second: "#41cde9",
      yeollow:"#F2D71F",
      link: "#416DEC",
      black: "#000",
      softGray: "#ddd",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      red: "#FF0000",
    },

    screens: {
      sm: "556px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
  },
});
