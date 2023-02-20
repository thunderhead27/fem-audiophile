/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'mobile': '640px',
      'tablet': '768px',
      'laptop': '1440px',
      'desktop': '1600px'
    },
    extend: {
      colors: {
        darkOrange: '#d87d4a',
        lightOrange: '#fbaf85',
        lightBlack: "#101010",
        darkGray: "#f1f1f1",
        lightGray: "#fafafa",
      },
      fontFamily: {
        sans: ['var(--font-manrope)', ...fontFamily.sans],
      },
      backgroundImage: {
        'desktopHero': "url('/assets/home/desktop/image-hero.jpg')",
        'tabletHero': "url('/assets/home/tablet/image-header.jpg')",
        'mobileHero': "url('/assets/home/mobile/image-header.jpg')"
      }
    },
  },
  plugins: [],
}
