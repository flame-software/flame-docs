import type {
	DocSidebarData,
	DocSidebarPage,
	DocSidebarSection,
} from "$lib/layout/layout";
import { loadPageData, type DocPage } from "$lib/page/page";
import { readdir } from "fs/promises";

const getDirectories = async (source: string) =>
	(await readdir(source, { withFileTypes: true }))
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

const getFiles = async (source: string) =>
	(await readdir(source, { withFileTypes: true }))
		.filter((dirent) => dirent.isFile())
		.map((dirent) => dirent.name);

async function orderSections(
	sections: DocSidebarSection[]
): Promise<DocSidebarSection[]> {
	let ordered_sections: DocSidebarSection[] = [];

	// first only do ordered sections
	for (let index = 0; index < sections.length; index++) {
		const section = sections[index];
		if (section.hasOwnProperty("order") && section.order) {
			ordered_sections[section.order] = section;
		}
	}

	// remove sections that have been put in order
	sections = sections.filter(function (el) {
		return !ordered_sections.includes(el);
	});

	// remove empty entries from ordered list
	ordered_sections = ordered_sections.filter(function (el) {
		return el != null;
	});

	// add the remaining sections
	ordered_sections = [...ordered_sections, ...sections];

	// order the pages
	for await (const section of ordered_sections) {
		section.pages = await orderPages(section.pages);
	}

	return ordered_sections;
}

async function orderPages(
	section: DocSidebarPage[]
): Promise<DocSidebarPage[]> {
	let ordered_pages: DocSidebarPage[] = [];

	// first only do ordered pages
	for (let index = 0; index < section.length; index++) {
		const page = section[index];
		if (page.hasOwnProperty("order") && page.order) {
			ordered_pages[page.order] = page;
		}
	}

	// remove sections that have been put in order
	section = section.filter(function (el) {
		return !ordered_pages.includes(el);
	});

	// remove empty entries from ordered list
	ordered_pages = ordered_pages.filter(function (el) {
		return el != null;
	});

	// add the remaining sections
	ordered_pages = [...ordered_pages, ...section];

	return ordered_pages;
}

async function getSidebarData(version: string): Promise<DocSidebarData> {
	let unsorted_sections: DocSidebarSection[] = [];

	for await (const folder of Object.entries(
		await getDirectories("src/docs/v1/")
	)) {
		const allPostFiles = await getFiles(
			"src/docs/" + version + "/" + folder[1]
		);
		const allFilesCorrect: DocSidebarPage[] = [];

		for (const page of Object.entries(allPostFiles)) {
			const result: DocPage = await loadPageData(
				`../../docs/v1/${folder[1]}/${page[1]}`
			);

			allFilesCorrect.push({
				title: result.title ?? "",
				file: page[1],
				order: result.order,
				filename: page[1].slice(0, -3),
				url: "/v1/" + folder[1] + "/" + page[1].slice(0, -3),
			});
		}

		let indexpage: DocSidebarPage | null = null;
		for (const item of allFilesCorrect) {
			if (item.filename == "index") indexpage = item;
		}

		unsorted_sections.push({
			name: folder[1],
			order: indexpage ? indexpage.order : undefined,
			pages: [...allFilesCorrect],
		});
	}

	let ordered_sections: DocSidebarSection[] = await orderSections(
		unsorted_sections
	);

	return {
		sections: ordered_sections,
	};
}

export async function load({ params }: any) {
	const docsidebar: DocSidebarData = await getSidebarData(params.versionslug);

	return {
		docsidebar,
	};
}
