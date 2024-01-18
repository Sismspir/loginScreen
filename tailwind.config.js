/** @type {import('tailwindcss').Config} */

import tailwindcssPatterns from 'tailwindcss-patterns';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': '#bac7d3',
      },
      fontWeight: {
        'placeholder': '700',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['placeholder'],
    },
  },
  plugins: [
    tailwindcssPatterns,
  ],
}

