/* eslint-disable global-require */
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.50'),
            h2: {
              color: theme('colors.gray.50'),
            },
            strong: {
              color: theme('colors.gray.50'),
            },
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      translate: ['dark'],
      display: ['group-hover', 'dark'],
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
