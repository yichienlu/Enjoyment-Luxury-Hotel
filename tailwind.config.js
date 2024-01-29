/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          120:'#7B6651',
          100:'#BF9D7D',
          40:'#F1EAE4',
          10:'#F7F2EE',
          Tint:'#FAF7F5'
        },
        neu:{
          100:'#140F0A',
          80:'#4B4B4B',
          60:'#909090',
          40:'#ECECEC',
          10:'#F9F9F9'
        },
        success:{
          120:'#299F65',
          100:'#52DD7E',
          20:'#BCFBBD',
          10:'#E8FEE7'
        },
        info:{
          120:'#1D66AC',
          100:'#3BADEF',
          20:'#B1EFFD',
          10:'#E6FBFE'
        },
        alert:{
          120:'#C22538',
          100:'#DA3E51',
          20:'#F5CCD1',
          10:'#FDECEF '
        },
        light:'#F7F2EE',
        dark:'#4B4B4B'
      },
      spacing:{
        '15':'60px',
        '30':'120px',
        '50':'200px'
      }
    },
  },
  plugins: [],
}

