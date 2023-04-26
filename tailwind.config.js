/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    fontFamily: {
      sans:    ['Satoshi-Regular', 'sans-serif'],
      display: ['Minimal-Mono-Regular', 'monospace'],
    },
    extend: {
      width: {
        md: '100%',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px',
      },
      fontSize: {
        caption: '.75rem',
        xs:      '.875rem',
        sm:      '1rem',
        base:    '1.125rem',
        xl:      '1.25rem',
        '2xl':   '1.5rem',
        '3xl':   '1.875rem',
        '4xl':   '2.25rem',
        '5xl':   '3rem',
        '6xl':   '4rem',
      },
    },
  },
  plugins: [],
};
