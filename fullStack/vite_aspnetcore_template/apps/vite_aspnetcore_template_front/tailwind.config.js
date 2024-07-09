/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import animatecss from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: {
        full: "rgba(0,0,0,0)",
      },
      primary: {
        50: "#e6fbe7",
        100: "#ccf7ce",
        200: "#99ef9d",
        300: "#66e66c",
        400: "#33de3b",
        500: "#00d60a",
        600: "#00ab08",
        700: "#008006",
        800: "#005604",
        900: "#002b02",
      },
      secondary: {
        50: "#feffe6",
        100: "#fcffcc",
        200: "#faff99",
        300: "#f7ff66",
        400: "#f5ff33",
        500: "#f2ff00",
        600: "#c2cc00",
        700: "#919900",
        800: "#616600",
        900: "#303300",
      },
      neutral: {
        50: "#fafcfa",
        100: "#f4f9f5",
        200: "#eaf4ea",
        300: "#dfeee0",
        400: "#d5e9d5",
        500: "#cae3cb",
        600: "#a2b6a2",
        700: "#79887a",
        800: "#515b51",
        900: "#282d29",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        nav: "3rem",
        "svh-nav": "calc(100svh - 3rem)",
      },
      minHeight: {
        "svh-nav": "calc(100svh - 3rem)",
        "lvh-nav": "calc(100lvh - 3rem)",
      },
      boxShadow: {
        "3xl": "1px 1px 5px black",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("hocus-within", ["&:hover", "&:focus-within"]);
      addVariant("ff", ":-moz-any(&)");
    }),
    animatecss,
  ],
};
