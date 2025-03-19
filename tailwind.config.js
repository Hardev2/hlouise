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
        'bg-color': '#000000',
        'gray-color': '#373737',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        heartbeat: {
          '0%': { transform: 'translateX(-50%)  scale(1)' },
          '25%': { transform: 'translateX(-50%) scale(1.2)' },
          '50%': { transform: 'translateX(-50%) scale(1)' },
          '75%': { transform: 'translateX(-50%) scale(1.2)' },
          '100%': { transform: 'translateX(-50%) (1)' },
        },
      },
      animation: {
        spin: 'spin 50s infinite linear',
        heartbeat: 'heartbeat 0.6s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
