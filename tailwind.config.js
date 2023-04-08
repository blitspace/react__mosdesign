/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato', 'ui-serif'],
      'serif': ['Montserrat', 'ui-serif'],
      'heading': ['Montserrat', 'ui-serif'],
      'body': ['Lato', 'ui-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}

