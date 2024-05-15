/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        pulse: {
          "0%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(0.995)",
          },
        },
      },
      animation: {
        slideIn: "slideIn 200ms 150ms ease forwards",
        fadeIn: "fadeIn 200ms ease forwards",
        pulse: "pulse 1s infinite alternate",
        pulseDelay: "pulse 1s 250ms infinite alternate",
      },
    },
    colors: {
      black: "#000",
      beige: "#F6F3DE",
      sand: "#DFCAB5",
      bronze: "#CB9470",
      earth: "#A25A44",
      green: "#203730",
    },
    fontFamily: {
      primary: "var(--font-primary)",
      secondary: "var(--font-secondary)",
      tertiary: "var(--font-tertiary)",
    },
  },
  plugins: [],
};
