/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        poppins:['Poppins','sans-serif'],
        pinyon: ["'Pinyon Script'", "cursive"],
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        shine: 'shine 3.5s  ease-out infinite',

      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shine: {
          '0%': { left: '-100%' },
          '60%': { left: '100%' },
          '100%': { left: '100%' },
        },
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};




