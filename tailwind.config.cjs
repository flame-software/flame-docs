/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				sm: "100%",
				md: "100%",
				lg: "1500px",
				xl: "1500px",
				"2xl": "1500px",
			},
		},
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		// ...
	],
};
