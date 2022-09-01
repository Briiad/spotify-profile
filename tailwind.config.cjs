/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1FDF64',
        secondary: {
          300: '#1d1f1f',
          500: '#171919',
          700: '#111212',
        },
      },
      fontFamily: {
        monts: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
