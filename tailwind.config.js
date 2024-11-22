/** @type {import('tailwindcss').Config} */
const shadow = require('tailwindcss-textshadow');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(250, 100, 0, 0.391)',
        DEFAULT: '2px 2px 4px rgba(250, 100, 0, 0.591)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [shadow],
};
