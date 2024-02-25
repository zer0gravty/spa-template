import typographyPlugin from '@tailwindcss/typography';
import countersPlugin from './src/plugins/counters';
import arrowsPlugin from './src/plugins/arrows';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          1000: '1d1a6d',
        },
      },
    },
    fontFamily: {
      'carter-one': ['"Carter One"'],
    },
  },
  plugins: [
    typographyPlugin,
    countersPlugin,
    arrowsPlugin,
  ],
};
