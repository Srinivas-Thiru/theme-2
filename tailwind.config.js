/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        slideRight: 'slideRight 1s ease-in-out forwards',
        slideLeft: 'slideLeft 1s ease-in-out forwards',
        wipeUp: 'wipeUp 1s ease-in-out forwards',
        wipeDown: 'wipeDown 1s ease-in-out forwards',
        typing: 'typing 3s steps(40, end)',
        scaleUp: "scaleUp 1s ease-in-out forwards",
        wipeOut: "wipeOut 0.1s ease-in-out forwards reverse"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        wipeUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wipeDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        scaleUp: {
          '0%': { scale: "0" },
          '100%': { scale: '100%' },
        },
        wipeOut: {
          '100%': { transform: 'translateY(0)', opacity: '1' },
          '0%': { transform: 'translateY(100%)', opacity: '0' },
        }
      },
      
    },
  },

  plugins: [],
};
