const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
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
    },
  },
  plugins: [],
  presets: [require('../../tailwind.config')],
};
