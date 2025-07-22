/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#2563EB", 
        accent: "#9333EA",
      },
      animation: {
        'border-glow': 'glow 4s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
