/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from './tailwind.config.js'

// const defaultTheme = resolveConfig(tailwindConfig).theme;

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // spacing: {
    //   ...defaultTheme.spacing,
    // },
    fontFamily: {
      'sans': ['Lato', 'ui-serif'],
      'serif': ['Montserrat', 'ui-serif'],
      'heading': ['Montserrat', 'ui-serif'],
      'body': ['Lato', 'ui-serif'],
    },
    extend: {
      colors: {
        'mos-footer': '#383638',
        'mos-red': '#ED3A3A',
      },
      spacing: {
        'mos-sm': defaultTheme.spacing['4'],
        'mos-md': defaultTheme.spacing['8'],
        'mos-lg': defaultTheme.spacing['16'],
      },
      maxWidth: {
        // 'mos-content': defaultTheme.maxWidth['7xl'],
        // TODO: check on how to reference default tailwind value
        // max-width-7xl
        'mos-content': '80rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
