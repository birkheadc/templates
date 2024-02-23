import { createThemes } from "tw-colors";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        nav: "4rem",
        "svh-nav": "calc(100svh - 4rem)",
      },
      minHeight: {
        "svh-nav": "calc(100svh - 4rem)",
      },
      boxShadow: {
        inner: "1px 1px 5px black inset",
      },
      padding: {
        nav: "4rem 0 0 0",
      },
      backgroundImage: {
        hero: "url('https://picsum.photos/id/56/1920/1080')",
      },
    },
    colors: {
      transparent: {
        full: "transparent",
      },
      success: {
        "50": "#f3f8ed",
        "100": "#e1eed5",
        "200": "#c9e1b5",
        "300": "#a7cd89",
        "400": "#88b863",
        "500": "#699c46",
        "600": "#507c34",
        "700": "#3f5f2c",
        "800": "#354d27",
        "900": "#2f4225",
        "950": "#162310",
      },
      warning: {
        "50": "#fefcec",
        "100": "#fbf6ca",
        "200": "#f6eb91",
        "300": "#f1db58",
        "400": "#eecc38",
        "500": "#e6ad1a",
        "600": "#cc8713",
        "700": "#a96214",
        "800": "#8a4d16",
        "900": "#713f16",
        "950": "#412007",
      },
      error: {
        "50": "#fff4f1",
        "100": "#ffe8e1",
        "200": "#ffd4c7",
        "300": "#ffb7a0",
        "400": "#ff9574",
        "500": "#f8683b",
        "600": "#e54c1d",
        "700": "#c13d14",
        "800": "#a03514",
        "900": "#843218",
        "950": "#481607",
      },
    },
    themes: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("hocus-within", ["&:hover", "&:focus-within"]);
      addVariant("ff", ":-moz-any(&)");
    }),
    createThemes({
      light: {
        primary: {
          "50": "#f9f6fd",
          "100": "#f4edfa",
          "200": "#e9daf4",
          "300": "#d8bdea",
          "400": "#c296dc",
          "500": "#a66cc9",
          "600": "#8248a2",
          "700": "#733d8e",
          "800": "#603375",
          "900": "#512e61",
          "950": "#31153d",
        },
        secondary: {
          "50": "#fcf5f4",
          "100": "#f9e8e7",
          "200": "#f4d6d4",
          "300": "#ecb9b5",
          "400": "#df918a",
          "500": "#cf6c64",
          "600": "#ba5148",
          "700": "#9c4139",
          "800": "#7e3731",
          "900": "#6d342f",
          "950": "#3a1815",
        },
        neutral: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#000000",
        },
        transparent: {
          theme: {
            low: "rgba(255,255,255,0.1)",
            med: "rgba(255,255,255,0.2)",
            high: "rgba(255,255,255,0.3)",
          },
          offTheme: {
            low: "rgba(0,0,0,0.1)",
            med: "rgba(0,0,0,0.3)",
            high: "rgba(0,0,0,0.5)",
          },
        },
      },
      dark: {
        primary: {
          "950": "#f9f6fd",
          "900": "#f4edfa",
          "800": "#e9daf4",
          "700": "#d8bdea",
          "600": "#c296dc",
          "500": "#a66cc9",
          "400": "#8248a2",
          "300": "#733d8e",
          "200": "#603375",
          "100": "#512e61",
          "50": "#31153d",
        },
        secondary: {
          "950": "#fcf5f4",
          "900": "#f9e8e7",
          "800": "#f4d6d4",
          "700": "#ecb9b5",
          "600": "#df918a",
          "500": "#cf6c64",
          "400": "#ba5148",
          "300": "#9c4139",
          "200": "#7e3731",
          "100": "#6d342f",
          "50": "#3a1815",
        },
        neutral: {
          "950": "#f6f6f6",
          "900": "#e7e7e7",
          "800": "#d1d1d1",
          "700": "#b0b0b0",
          "600": "#888888",
          "500": "#6d6d6d",
          "400": "#5d5d5d",
          "300": "#4f4f4f",
          "200": "#454545",
          "100": "#3d3d3d",
          "50": "#000000",
        },
        transparent: {
          theme: {
            low: "rgba(0,0,0,0.1)",
            med: "rgba(0,0,0,0.3)",
            high: "rgba(0,0,0,0.5)",
          },
          offTheme: {
            low: "rgba(255,255,255,0.1)",
            med: "rgba(255,255,255,0.2)",
            high: "rgba(255,255,255,0.3)",
          },
        },
      },
    }),
  ],
};
export default config;
