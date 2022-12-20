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
	let versionedFiles: { [key: string]: Function } = {};
	let allDirectoryFiles = import.meta.glob("/docs/**/*.md");

	// filter based on version
	for (const key in allDirectoryFiles) {
		let keyparts = key.split("/");
		if (keyparts[2] == version)
			versionedFiles[key] = allDirectoryFiles[key];
	}

	for (const [key, item] of Object.entries(versionedFiles)) {
		let keyparts = key.split("/");
		let categoryname = keyparts[3];
		let filename = keyparts[keyparts.length - 1];

		let category: DocSidebarSection | null = null;
		unsorted_sections.forEach((element) => {
			if (element.name == categoryname) category = element;
		});

		if (!category) {
			let indexpath =
				keyparts.slice(0, -1).toString().replaceAll(",", "/") +
				"/index.md";
			let index = await versionedFiles[indexpath]();
			let indexpage: DocPage | null = null;

			try {
				const { title, sections, order, icon } = index.metadata;

				indexpage = {
					title,
					content: index.default.render().html,
					sections: sections ?? [],
					order,
					icon,
					last_edited: "today",
					url: `/${version}/${categoryname}`,
					urlname: "index",
					file: "index.md",
					fileurl: indexpath,
					github_url: `https://github.com/flame-software/flame-docs/tree/main/docs/${version}/${categoryname}/index.md`,
					category: categoryname,
				};
			} catch (e) {
				throw error(404, e + " VIA POST SIDEBAR");
			}

			category = {
				name: categoryname,
				order: indexpage ? indexpage.order : undefined,
				icon: indexpage ? indexpage.icon : undefined,
				url: indexpage ? indexpage.url : "",
				pages: [],
			};
			unsorted_sections.push(category);
		}

		let page = await item();

		try {
			const { title, sections, order, icon } = page.metadata;

			let pagedata: DocPage = {
				title,
				content: page.default.render().html,
				sections: sections ?? [],
				order,
				icon,
				last_edited: "today",
				url: `/${version}/${categoryname}/${filename.slice(0, -3)}`,
				urlname: filename.slice(0, -3),
				file: filename,
				fileurl: key,
				github_url: `https://github.com/flame-software/flame-docs/tree/main/docs/${version}/${categoryname}/${filename}.md`,
				category: categoryname,
			};

			category.pages.push(pagedata);
		} catch (e) {
			// just dont add
			// throw error(404, e + " VIA POST SIDEBAR PAGE");
		}
	}

	let ordered_sections: DocSidebarSection[] = await orderSections(
		unsorted_sections
	);

	return {
		sections: ordered_sections,
	};
}
