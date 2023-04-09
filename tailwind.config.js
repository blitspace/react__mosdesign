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
        'mos-xxs': defaultTheme.spacing['1'],
        'mos-xs': defaultTheme.spacing['2'],
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
    function({ addBase, theme }) {
      // https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574
      // Export color variables
      // To use: var(--color-mos-red)
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
