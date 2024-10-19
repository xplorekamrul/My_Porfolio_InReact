/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'cha': ['Chakra Petch'],
      'pap': ['Paprika'],
      'ops': ['Open Sans'],
      'qw': ['Qwitcher Grypen'],
      'ls': ['Londrina Sketch'],
      // 'mf':['Reey-Regular']
    },
    extend: {
      // fontFamily: {
      //   custom: ['Reey Regular 400'], // 'YourFontName' matches the one you defined in @font-face
      // },
      colors: {
        'gg': '#23db3f',
        'ff': '#ffffff',
        'blackbg': '#050415',
        'cc': '#2323239e',
      },
      before: ['hover'], // Optional: add variants like hover
      after: ['hover visible'],
    },
    boxShadow: {
      'btnshadow': '0px 0px 20px .7px rgba(35,219,63,0.38);',
    },
    screens: {
      'mob': { 'max': '479px' },     // For mobile devices up to 479px
      'sm': { 'min': '480px'}, // For small mobile devices from 480px to 639px
      'tab': { 'min': '640px'}, // For tablets between 640px and 767px
      'md': { 'min': '768px'}, // For medium devices (tablets/laptops) from 768px to 1023px
      'lg': { 'min': '1024px'}, // For laptops and desktops between 1024px to 1279px
      'xl': { 'min': '1280px'}, // For larger screens (desktops) from 1280px to 1599px
      '2xl': { 'min': '1600px' },   // For extra-large screens 1600px and above
    }    
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-3d': {
          'text-shadow': '1px 1px 0 #23db3f, 2px 2px 0 #23ccdbec, 3.5px 3px 0 #23ccdbec',
          'transform': 'rotateX(0deg) rotateY(0deg)',
          'perspective': '1000px',
        }
      })
    }
  ],
}

