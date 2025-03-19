/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        custom: ['MyCustomFont', 'sans-serif'], // ✅ Move this inside fontFamily
      },
      gridTemplateColumns: { '70/30': '70% 28%' },
      colors: {
        '30-percent': '#c7dc5a',
        'bg-color': '#0A0A0A',
        gray: '#5B5B5B',
      },
      keyframes: {
        spin: {
          from: { transform: 'translateX(-50%) rotate(0deg)' },
          to: { transform: 'translateX(-50%) rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 50s linear infinite',
      },
    },
  },
  plugins: [],
};
