/** @type {import('tailwindcss').Config} */

export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      // Figma provided
      'h-info': '#3183FF',
      'h-success': '#61B449',
      'h-yellow': '#EDD92A',
      'h-error': '#FF5252',
      'h-primary': '#233145',
      'h-secondary': '#8E98A7',
      'h-gray': '#DFE5F1',
      'h-white': '#FFFFFF',
      'h-gray-input': '#FAFAFA',
      'h-blue-light': '#F3F8FF',
      'h-green-light': '#F4F9F2',
      'h-red-light': '#FFF2ED',

      //Default Category Colors

      // Income
      'ct-darkGreen': '#16A085',
      'ct-blue': '#3498DB',
      'ct-red': '#E74C3C',
      'ct-purple': '#8E44AD',
      'ct-lightGreen': '#2ECC71',
      'ct-orange': '#E67E22',
      
      // Expense
      'ct-yellow': '#F1C40F',
      'ct-crimsonRed': '#DC143C',
      'ct-deepCobaltBlue': '#0047AB',
      'ct-paleLilac': '#a393fa',
      'ct-navyBlue': '#233145',

      'ct-pink-500': '#e91e63',
      'ct-pink-a100': '#ff80ab',

      'ct-purple-500': '#9c27b0',
      'ct-purple-a100': '#ea80fc',

      'ct-deep-purple-500': '#673ab7',
      'ct-deep-purple-a100': '#b388ff',

      'ct-indigo-500': '#3f51b5',
      'ct-indigo-a100': '#8c9eff',

      'ct-blue-500': '#2196f3',
      'ct-blue-a100': '#82b1ff',

      'ct-light-blue-500': '#03a9f4',
      'ct-light-blue-a100': '#80d8ff',

      'ct-cyan-500': '#00bcd4',
      'ct-cyan-a100': '#84ffff',

      'ct-teal-500': '#009688',
      'ct-teal-a100': '#a7ffeb',

      'ct-green-500': '#4caf50',
      'ct-green-a100': '#b9f6ca',

      'ct-light-green-500': '#8bc34a',
      'ct-light-green-a100': '#ccff90',

      'ct-lime-500': '#cddc39',
      'ct-lime-a100': '#f4ff81',

      'ct-yellow-500': '#ffeb3b',
      'ct-yellow-a100': '#ffff8d',

      'ct-amber-500': '#ffc107',
      'ct-amber-a100': '#ffe57f',

      'ct-orange-500': '#ff9800',
      'ct-orange-a100': '#ffd180',

      'ct-deep-orange-500': '#ff5722',
      'ct-deep-orange-a100': '#ff9e80',

      'ct-brown-500': '#795548',
      'ct-brown-300': '#a1887f',

      'ct-blue-grey-500': '#607d8b',
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
    zIndex: {
      1600: '1600',
    },
  },
};
export const plugins = [import('tailwindcss-animate')];
