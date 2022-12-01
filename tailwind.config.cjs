/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				sm: "600px",
				md: "728px",
				lg: "1200px",
				xl: "1500px",
				"2xl": "5600px",
			},
		},
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		// ...
	],
};
