/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
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
