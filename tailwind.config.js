/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#01473E",
      "primary-light": "#014B41",
      secondary: "#F2F8F0",
      "secondary-medium": "#ECF5EA",
      "secondary-dark": "#E4EEE6",
      grey: "#A0BCB3",
      "grey-light": "#C5E5DB",
      "grey-medium": "#98ADAA",
      white: "#FFFFFF",
      black: "#141213",
      cta: "#F3EBE3",
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        zendots: ['"Zen Dots"', "cursive"],
      },
    },
  },
  plugins: [],
};
