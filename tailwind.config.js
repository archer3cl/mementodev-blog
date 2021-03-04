module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          soda: '#2176cc',
        },
        pink: {
          sunset: '#ff7777',
        },
      },
    },
  },
  variants: {
    extend: {
      translate: ['dark'],
      display: ['group-hover', 'dark'],
    },
  },
  plugins: [],
};
