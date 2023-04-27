/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
      colors: {
        'antique': {
          100: '#faebd7',
          200: '#e6d4bc',
          300: '#cfbca3',
          400: '#b8a48a',
          500: '#a18c71',
          600: '#8a7458',
          700: '#735c3f',
          800: '#5c4426',
          900: '#452c0d',
        },
        'periwinkle': {
          50 : '#e8e6ff',
          100: '#d6d2fe',
          200: '#c4befe',
          300: '#b2aafe',
          400: '#a096fe',
          500: '#8e82fe',
          600: '#736801',
          700: '#574ea3',
          800: '#383475',
          900: '#1fia47',
          950: '#030019',
        },        
      },  
    },
  },
  plugins: [],
};
