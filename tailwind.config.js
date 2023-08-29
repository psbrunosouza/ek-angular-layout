/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    ripple: (theme) => ({
      colors: theme('colors'),
    }),
    extend: {
      colors: {
        base: {
          100: '#bdc0d5',
          200: '#9398b9',
          400: '#4e558b',
          600: '#2c3371',
          DEFAULT: '#2c3371',
        },
        contrast: {
          100: '#f2f2f2',
          200: '#e9e9e9',
          400: '#b5b5b5',
          600: '#6d6d6d',
          DEFAULT: '#6d6d6d',
        },
        highlight: {
          100: '#f0b8be',
          200: '#e48c94',
          400: '#cb4853',
          600: '#b2323a',
          DEFAULT: '#b2323a',
        },
        gray: {
          100: '#f2f2f2',
          200: '#e9e9e9',
          400: '#b5b5b5',
          600: '#6d6d6d',
          DEFAULT: '#6d6d6d',
        },
        black: '#000000',
        white: '#ffffff',
        danger: {
          100: '#ffbac8',
          200: '#ff8da4',
          400: '#fb3664',
          600: '#e5044a',
          DEFAULT: '#e5044a',
        },
        success: {
          100: '#ccffbe',
          200: '#a4ff90',
          400: '#19fd00',
          600: '#00e800',
          DEFAULT: '#00e800',
        },
        warning: {
          100: '#ffe3b0',
          200: '#ffd17c',
          400: '#ffaf0b',
          600: '#fd9400',
          DEFAULT: '#fd9400',
        },
        info: {
          100: '#b7e5f9',
          200: '#8bd4f5',
          400: '#4eb7ed',
          600: '#3d9cda',
          DEFAULT: '#3d9cda',
        },
      },
      borderRadius: {
        sm: '0.5rem', // 8px,
        base: '1rem', // 16px,
        xl: '1.5rem', // 24px
      },
      fontFamily: {
        title: ['Sora'],
      },
      spacing: {
        sm: '0.725rem',
        base: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '2.5rem', // 40px
        '3xl': '3rem', // 48px
      },
      height: {
        'base': '2.5rem', // 40px
        'lg': '3rem', // 48px
        'xl': '3.5rem', // 56px
      },
      fontSize: {
        '2sm': '0.500rem',
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '2.5rem', // 40px
        '3xl': '3rem', // 48px
      },
    },
  },
  plugins: [require('tailwindcss-ripple')()],
};
