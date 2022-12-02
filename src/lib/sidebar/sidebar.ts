import { loadPageData } from "$lib/page/page";
import { error } from "@sveltejs/kit";
import { readdir } from "fs/promises";
import path from "path";

const getDirectories = async (source: string) => {
	try {
		let dir = await readdir(source, { withFileTypes: true });
		return dir
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);
	} catch (e) {
		throw error(404, e + " VIA GETDIRECTORIES");
	}
};

const getFiles = async (source: string) => {
	try {
		let dir = await readdir(source, { withFileTypes: true });
		return dir
			.filter((dirent) => dirent.isFile())
			.map((dirent) => dirent.name);
	} catch (e) {
		throw error(404, e + " VIA GETFILES");
	}
};

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

async function orderPages(section: DocPage[]): Promise<DocPage[]> {
	let ordered_pages: DocPage[] = [];

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

export async function getSidebarData(version: string): Promise<DocSidebarData> {
	let unsorted_sections: DocSidebarSection[] = [];
	let directoryFiles;

	// try {
	// 	let dir = await readdir(path.join(process.cwd(), "src/routes/docs/"), {
	// 		withFileTypes: true,
	// 	});
	// 	console.log(dir);
	// } catch (e) {
	// 	console.log(e);
	// }

	directoryFiles = await getDirectories(
		path.resolve(process.cwd(), "src", "routes", "docs", version)
	);

	for await (const folder of Object.entries(directoryFiles)) {
		const allPostFiles = await getFiles(
			path.resolve(
				process.cwd(),
				"src",
				"routes",
				"docs",
				version,
				folder[1]
			)
		);
		const allFilesCorrect: DocPage[] = [];

		for (const page of Object.entries(allPostFiles)) {
			const result: DocPage = await loadPageData(
				version,
				folder[1],
				page[1].slice(0, -3)
			);
			allFilesCorrect.push(result);
		}

		let indexpage: DocPage | null = null;
		for (const item of allFilesCorrect) {
			if (item.file == "index.md") indexpage = item;
		}

		unsorted_sections.push({
			name: folder[1],
			order: indexpage ? indexpage.order : undefined,
			icon: indexpage ? indexpage.icon : undefined,
			url: indexpage ? indexpage.url : "",
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
