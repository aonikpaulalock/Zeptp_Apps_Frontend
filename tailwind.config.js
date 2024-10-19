/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        primary: '#001858',
        SecondPrimary: '#596ea8',
        secondary: '#F582AE',
      },
      backgroundImage: {
       'custom-gradient': 'linear-gradient(to right, #6DC1DC 2%, #A690FC 23%, #FC96BB 61%, #FFC397 100%)',
      },
    },
  },
  plugins: [],
}