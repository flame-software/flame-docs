// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare module "*.md" {
	// "unknown" would be more detailed depends on how you structure frontmatter
	const attributes: Record<string, unknown>;

	// When "Mode.TOC" is requested
	const toc: { level: string; content: string }[];

	// When "Mode.HTML" is requested
	const html: string;

	// When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
	import React from "react";
	const ReactComponent: React.VFC;

	// When "Mode.Vue" is requested
	import { ComponentOptions, Component } from "vue";
	const VueComponent: ComponentOptions;
	const VueComponentWith: (
		components: Record<string, Component>
	) => ComponentOptions;

	// Modify below per your usage
	export {
		attributes,
		toc,
		html,
		ReactComponent,
		VueComponent,
		VueComponentWith,
	};
}

declare module "@fortawesome/free-solid-svg-icons/index.es" {
	export * from "@fortawesome/free-solid-svg-icons";
}

declare module "@fortawesome/free-brands-svg-icons/index.es" {
	export * from "@fortawesome/free-brands-svg-icons";
}

interface DocPage {
	content: string;
	title: string;

	sections: string[];
	category: string;
	last_edited: string;
	github_url: string;

	order?: number;
	icon?: string;

	url: string;
	urlname: string;
	file: string;
	fileurl: string;
}

interface DocSidebarSection {
	name: string;
	order?: number;
	icon?: string;
	pages: DocPage[];
	url: string;
}

interface DocSidebarData {
	sections: { [index: number]: DocSidebarSection };
}
