interface DocSidebarSection {
	name: string;
	order?: number;
	icon?: string;
	pages: DocSidebarPage[];
	url: string;
}

interface DocSidebarData {
	sections: { [index: number]: DocSidebarSection };
}

interface DocSidebarPage {
	title: string;
	order?: number;
	icon?: string;
	file: string;
	filename: string;
	url: string;
}

export type { DocSidebarData, DocSidebarSection, DocSidebarPage };
