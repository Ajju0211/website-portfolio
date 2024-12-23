/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import scrollbar from 'tailwind-scrollbar';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(-15deg)" },
        },
      },
      animation: {
        wave: "wave 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    scrollbar,
  ],
};
