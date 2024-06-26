/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        PtSerif: ["PT Serif", " serif"],
        OpenSans: ["Open Sans", " sans-serif"],
      },
    },
  },
  plugins: [],
}
