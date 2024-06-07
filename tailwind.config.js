/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 0.5s ease-in-out forwards",
        slideLeft: "slideLeft 0.5s ease-in-out forwards",
        slideRight: "slideRight 0.5s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-in-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(-200px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(200px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(200px)", opacity: "0" },
          // "95%": { transform: "translateY(-20px)", opacity: "1" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: { themes: ["dracula", "nord"] },
};
