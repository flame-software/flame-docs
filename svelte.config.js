import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import relativeImages from "mdsvex-relative-images";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],

	preprocess: [
		preprocess(),
		mdsvex({
			remarkPlugins: [relativeImages],
			extensions: [".md"],
		}),
	],

	kit: {
		adapter: adapter(),
	},
};

export default config;
