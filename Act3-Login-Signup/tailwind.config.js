module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: '#060607',
        darkPurple: '#6E1B5E',
        dartViolet: '#473867',
        hawkeyeYellow: '#FDE83E'
      },
      zIndex: {
        '-1': 'z-index: -1',
      },
      backgroundImage: {
        'biography-bg': "url('./assets/images/biography.png')",
        'weapons-bg': "url('./assets/images/weapons-bg.png')"
      },
      fontFamily: {
        'spartan': ['Spartan', 'sans-serif'],
        'dosis': ['Dosis', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
