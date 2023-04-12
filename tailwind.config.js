/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-blue': '#1F1E1E',
				cyan: '#1F1E1E',
			},
			width: {
				120: '120%',
			},
			height: {
				120: '120%',
			},
			inset: {
				'-10': '-10%',
			},
			borderRadius: {
				100: '100%',
			},
			animation: {
				glow1: 'glow1 4s linear infinite',
				glow2: 'glow2 4s linear infinite',
				glow3: 'glow3 4s linear infinite',
				glow4: 'glow4 4s linear infinite',
			},
			keyframes: {
				glow1: {
					'0%': { transform: 'translate(10%, 10%) scale(1)' },
					'25%': { transform: 'translate(-10%, 10%) scale(1)' },
					'50%': { transform: 'translate(-10%, -10%) scale(1)' },
					'75%': { transform: 'translate(10%, -10%) scale(1)' },
					'100%': { transform: 'translate(10%, 10%) scale(1)' },
				},
				glow2: {
					'0%': { transform: 'translate(-10%, -10%) scale(1)' },
					'25%': { transform: 'translate(10%, -10%) scale(1)' },
					'50%': { transform: 'translate(10%, 10%) scale(1)' },
					'75%': { transform: 'translate(-10%, 10%) scale(1)' },
					'100%': { transform: 'translate(-10%, -10%) scale(1)' },
				},
				glow3: {
					'0%': { transform: 'translate(-10%, 10%) scale(1)' },
					'25%': { transform: 'translate(-10%, -10%) scale(1)' },
					'50%': { transform: 'translate(10%, -10%) scale(1)' },
					'75%': { transform: 'translate(10%, 10%) scale(1)' },
					'100%': { transform: 'translate(-10%, 10%) scale(1)' },
				},
				glow4: {
					'0%': { transform: 'translate(10%, -10%) scale(1)' },
					'25%': { transform: 'translate(10%, 10%) scale(1)' },
					'50%': { transform: 'translate(-10%, 10%) scale(1)' },
					'75%': { transform: 'translate(-10%, -10%) scale(1)' },
					'100%': { transform: 'translate(10%, -10%) scale(1)' },
				},
			},
		},
	},
	plugins: [],
}

module.exports = config
