/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C43C1E",
        primary1: "#DF4D2D",
      },
      keyframes: {
        showContactFlutuant: {
          "0%": { right: "-100%" },
          "100%": { right: "1%" },
        },
        animation: {
          show: "showContactFlutuant 1s ease-in-out infinite",
        },
      },
    },
  },
  plugins: [],
};
