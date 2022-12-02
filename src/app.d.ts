// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
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
	srcurl: string;
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
