/* eslint-disable quote-props */
module.exports = {
  theme: {
    // extend: {},
    fontFamily: {
      display: ['Open Sans', 'Helvetica Neue', 'Calibri', 'Lucida Grande', 'sans-serif'],
      body: ['Open Sans', 'Helvetica Neue', 'Calibri', 'Lucida Grande', 'sans-serif']
    },
    screens: {
      'sm-max': { 'max': '639px' },
      'md-max': { 'max': '767px' },
      'lg-max': { 'max': '1023px' },
      'xl-max': { 'max': '1279px' },
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    colors: {
      transparent: 'transparent',
      purple: {
        500: '#6C4080',
        650: '29242e',
        700: '#1a0f22',
        900: '#452C50'
      }
      // blue: rgb(20, 115, 230),
      // gray: {
      //   100: rgb(255, 255, 255),
      //   200: rgb(244, 244, 244),
      //   300: rgb(234, 234, 234),
      //   400: rgb(211, 211, 211),
      //   500: rgb(188, 188, 188),
      //   600: rgb(149, 149, 149),
      //   700: rgb(116, 116, 116),
      //   800: rgb(80, 80, 80),
      //   900: rgb(50, 50, 50),
      // },
    }
  },
  variants: {},
  plugins: []
}
