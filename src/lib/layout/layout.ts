interface DocSidebarSection {
	name: string;
	order?: number;
	pages: DocSidebarPage[];
}

interface DocSidebarData {
	sections: { [index: number]: DocSidebarSection };
}

interface DocSidebarPage {
	title: string;
	order?: number;
	file: string;
	filename: string;
	url: string;
}

export type { DocSidebarData, DocSidebarSection, DocSidebarPage };
