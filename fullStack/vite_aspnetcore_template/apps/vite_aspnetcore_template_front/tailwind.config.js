/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import animatecss from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      transparent: {
        full: "rgba(0,0,0,0)",
      },
      primary: {
        50: "#f1ebf8",
        100: "#e2d6f1",
        200: "#c5aee3",
        300: "#a885d6",
        400: "#8b5dc8",
        500: "#6e34ba",
        600: "#582a95",
        700: "#421f70",
        800: "#2c154a",
        900: "#160a25",
      },
      secondary: {
        50: "#f8ebf2",
        100: "#f1d6e6",
        200: "#e3aecc",
        300: "#d685b3",
        400: "#c85d99",
        500: "#ba3480",
        600: "#952a66",
        700: "#701f4d",
        800: "#4a1533",
        900: "#250a1a",
      },
      neutral: {
        50: "#f0f0f1",
        100: "#e0e0e4",
        200: "#c1c1c8",
        300: "#a2a2ad",
        400: "#838391",
        500: "#646476",
        600: "#50505e",
        700: "#3c3c47",
        800: "#28282f",
        900: "#141418",
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
        nav: "4rem",
        "svh-nav": "calc(100svh - 4rem)",
      },
      minHeight: {
        "svh-nav": "calc(100svh - 4rem)",
        "lvh-nav": "calc(100lvh - 4rem)",
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
