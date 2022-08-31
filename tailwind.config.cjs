/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1FDF64',
        secondary: '#171919',
      },
      fontFamily: {
        monts: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
