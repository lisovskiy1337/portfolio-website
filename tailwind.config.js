/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      mobmenu: "678px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkbg: "#030235",
        custombg: "rgba(3, 2, 53, 0.25)",
      },
    },
  },

  plugins: [],
};
