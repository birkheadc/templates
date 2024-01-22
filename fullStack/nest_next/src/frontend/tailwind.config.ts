import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        50: '#F2EFFB',
        100: '#E4DEF7',
        200: '#C9BDEF',
        300: '#AE9CE7',
        400: '#937CDF',
        500: '#5D3FCA',
        600: '#4C2CB5',
        700: '#372083',
        800: '#291863',
        900: '#1C1042',
        950: '#0E0821'
      },
    }
  }
};
export default config;
