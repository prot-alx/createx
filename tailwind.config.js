/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    colors: {
      white: '#FFFFFF',
      primary:'#17696A',
      success:'#03CEA4',
      danger:'#FF4242',
      warning:'#F89828',
      info:'#5A87FC',
      black: '#000000',
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
    extend: {   
      boxShadow: {
        'small': '0px 80px 80px -20px rgba(154, 156, 165 , 0.08), 0px 30px 24px -10px rgba(154, 156, 165 , 0.05), 0px 12px 10px -6px rgba(154, 156, 165 , 0.04), 0px 4px 4px -4px rgba(30, 33, 44 , 0.03)',
        'regular': '0px 80px 80px -20px rgba(154, 156, 165 , 0.16), 0px 30px 24px -10px rgba(154, 156, 165 , 0.10), 0px 12px 10px -6px rgba(154, 156, 165 , 0.08), 0px 4px 4px -4px rgba(30, 33, 44 , 0.05)',
        'large': '0px 60px 80px -20px rgba(30, 33, 44 , 0.16), 0px 26px 24px -10px rgba(30, 33, 44 , 0.10), 0px 10px 12px -6px rgba(30, 33, 44 , 0.08), 0px 4px 4px -4px rgba(30, 33, 44 , 0.05)',
      },   
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
      fontSize: {
        lead: ['1.3rem', {lineHeight: '1.5', }],            /* 20px */
        large: ['1.1rem', {lineHeight: '1.5', }],           /* 18px */
        base: ['1rem', {lineHeight: '1.6', }],              /* 16px */
        small: ['0.9rem', {lineHeight: '1.5', }],           /* 14px */
        extrasmall: ['0.8rem', {lineHeight: '1.5', }],      /* 12px */
        extraextrasmall: ['0.6rem', {lineHeight: '1.5', }], /* 10px */
      },
    },
  },
  plugins: [],
}
