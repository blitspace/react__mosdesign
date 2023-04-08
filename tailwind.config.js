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
      },
      spacing: {
        'mos-md': defaultTheme.spacing['8'],
        'mos-lg': defaultTheme.spacing['16'],
      },
      maxWidth: {
        'mos-content': defaultTheme.width['7xl'],
        // 'mos-content': '900px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};