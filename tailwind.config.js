/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#4D7C0F',
        background:'#FAFDF2',
        heading:'#1A2E05',
        textcolor: '#262626',
      },
      fontFamily: {
        'universal':['Poppins']
      },
    },
  },
  plugins: [],
}