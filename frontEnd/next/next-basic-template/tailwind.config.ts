import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': colors.black,
      'gray': colors.gray,
      'white': colors.white,
      'slate': colors.slate,
      'amber': colors.amber,
      'yellow': colors.yellow,
      'sky': colors.sky,
      'primary': {
        '50': '#faf6fd',
        '100': '#f4edfa',
        '200': '#eadaf4',
        '300': '#dabdea',
        '400': '#c596dc',
        '500': '#ab6cc9',
        '600': '#9756b4',
        '700': '#773d8e',
        '800': '#633375',
        '900': '#542e61',
        '950': '#33143e',
    },
      'secondary': {
        '50': '#e9fffc',
        '100': '#c8fff7',
        '200': '#99fff3',
        '300': '#52ffee',
        '400': '#05fff3',
        '500': '#00edf1',
        '600': '#00bcca',
        '700': '#0095a2',
        '800': '#087e8b',
        '900': '#0b616e',
        '950': '#00424c',
    },
      'translucent': {
        '10': 'rgba(0, 0, 0, 0.1)',
        '20': 'rgba(0, 0, 0, 0.2)',
        '30': 'rgba(0, 0, 0, 0.3)',
        '40': 'rgba(0, 0, 0, 0.4)',
        '50': 'rgba(0, 0, 0, 0.5)',
        '60': 'rgba(0, 0, 0, 0.6)',
        '70': 'rgba(0, 0, 0, 0.7)',
        '80': 'rgba(0, 0, 0, 0.8)',
        '90': 'rgba(0, 0, 0, 0.9)',
        
      }
    }
  },
  plugins: [],
};
export default config;
