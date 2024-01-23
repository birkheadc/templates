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
        50: '#FFECEB',
        100: '#FFC5C2',
        200: '#000',
        300: '#FF5147',
        400: '#FF2A1F',
        500: '#CB0E01',
        600: '#B80900',
        700: '#8F0700',
        800: '#660500',
        900: '#3D0300',
        950: '#290300'
      },
      accentA: {
        50: '#EBFFF9',
        100: '#C2FFED',
        200: '#85FFDA',
        300: '#47FFC8',
        400: '#1FFFBC',
        500: '#00E099',
        600: '#00CC8F',
        700: '#00A372',
        800: '#006647',
        900: '#003D2A',
        950: '#00291C',
      },
      accentB: {
        50: '#FFF9EB',
        100: '#FFEDC2',
        200: '#FFDA85',
        300: '#FFCE5C',
        400: '#FFC233',
        500: '#FDC835',
        600: '#E09D00',
        700: '#B88100',
        800: '#8F6400',
        900: '#523900',
        950: '#291D00',
      },
      neutral: {
        50: '#F5F4F5',
        100: '#E2DFE2',
        200: '#C5BEC5',
        300: '#B2A9B2',
        400: '#9F939F',
        500: '#8C7D8C',
        600: '#776977',
        700: '#615661',
        800: '#4C434C',
        900: '#363036',
        950: '#201D1E',
      },
      translucent: {
        light: 'rgba(0, 0, 0, 0.1)',
        medium: 'rgba(0, 0, 0, 0.4)',
        heavy: 'rgba(0, 0, 0, 0.6)'
      }
    }
  }
};
export default config;
