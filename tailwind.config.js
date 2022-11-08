const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        primaryGray: "#3A4562",
      },
      backgroundImage: {
        pin: `url(./src/assets/Location.png)`,
      },
    },
  },
  plugins: [],
};
