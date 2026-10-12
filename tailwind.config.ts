// tailwind.config.js
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}', // Убедитесь, что пути соответствуют вашей структуре папок
	],
	theme: {
		extend: {
			colors: {
				primary: '#2967FF',
			},
		},
	},
	plugins: [],
}
