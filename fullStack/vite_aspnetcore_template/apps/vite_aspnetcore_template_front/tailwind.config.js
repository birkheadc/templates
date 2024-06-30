/** @type {import('tailwindcss').Config} */
import { createThemes } from "tw-colors";
import plugin from "tailwindcss/plugin";

const primary = {
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
};

const secondary = {
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
};

const neutral = {
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
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    createThemes({
      light: {
        primary: primary,
        secondary: secondary,
        neutral: neutral,
      },
      dark: {
        primary: {
          50: "#160a25",
          100: "#2c154a",
          200: "#421f70",
          300: "#582a95",
          400: "#6e34ba",
          500: "#8b5dc8",
          600: "#a885d6",
          700: "#c5aee3",
          800: "#e2d6f1",
          900: "#f1ebf8",
        },
        secondary: {
          50: "#250a1a",
          100: "#4a1533",
          200: "#701f4d",
          300: "#952a66",
          400: "#ba3480",
          500: "#c85d99",
          600: "#d685b3",
          700: "#e3aecc",
          800: "#f1d6e6",
          900: "#f8ebf2",
        },
        neutral: {
          50: "#141418",
          100: "#28282f",
          200: "#3c3c47",
          300: "#50505e",
          400: "#646476",
          500: "#838391",
          600: "#a2a2ad",
          700: "#c1c1c8",
          800: "#e0e0e4",
          900: "#f0f0f1",
        },
      },
    }),
  ],
};
