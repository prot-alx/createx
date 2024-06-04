/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'primary':'#17696A',
        'success':'#03CEA4',
        'danger':'#FF4242',
        'warning':'#F89828',
        'info':'#5A87FC',
        'divider-gradient':'',
        gray: {
          100: '#F9F9F9',
          200: '#F4F5F7',
          300: '#E5E8ED',
          400: '#D7DADD',
          500: '#B3B7BC',
          600: '#9A9CA5',
          700: '#787A80',
          800: '#424551',
          900: '#1E212C',
        },
      },
    },
  },
  plugins: [],
}
