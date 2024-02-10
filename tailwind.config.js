/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
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
			},
			animation: {
				blink: 'blink 1.4s infinite both',
			},
			zIndex: {
				1600: '1600',
			},
		},
	},
	plugins: [],
};
