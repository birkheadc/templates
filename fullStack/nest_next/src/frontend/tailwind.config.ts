import { createThemes } from 'tw-colors';
import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {},
    themes: {}
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('hocus-within', ['&:hover', '&:focus-within']);
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
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#000000',
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
          '950': '#f6f6f6',
          '900': '#e7e7e7',
          '800': '#d1d1d1',
          '700': '#b0b0b0',
          '600': '#888888',
          '500': '#6d6d6d',
          '400': '#5d5d5d',
          '300': '#4f4f4f',
          '200': '#454545',
          '100': '#3d3d3d',
          '50': '#000000',
        },
      },
    })
  ]
};
export default config;
