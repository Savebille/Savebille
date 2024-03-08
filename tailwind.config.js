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

      // Category Colors
      'ct-red' : '#E74C3C' ,
      'ct-purple' : '#8E44AD',
      'ct-blue' : '#3498DB' ,
      'ct-darkGreen' : '#16A085',
      'ct-lightGreen' : '#2ECC71' ,
      'ct-yellow' : '#F1C40F' ,
      'ct-orange' : '#E67E22' ,
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
