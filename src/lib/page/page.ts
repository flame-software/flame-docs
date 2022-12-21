import { error } from "@sveltejs/kit";

import { stat } from "fs/promises";

import path from "path";

export async function loadPageData(
	versionslug: string,
	categoryslug: string,
	slug: string
): Promise<DocPage> {
	let post = null;
	let posts = null;
	const url = `/${versionslug}/${categoryslug}/${slug}`;
	const fileurl =
		"/docs/" + versionslug + "/" + categoryslug + "/" + slug + ".md";

	try {
		posts = import.meta.glob("/docs/**/*");
	} catch (e) {
		throw error(404, e + " VIA IMPORT");
	}

	try {
		post = await posts[fileurl]();
		if (!post) throw error(404, "Not Found");

		const { title, sections, order, icon } = post.metadata;

		return {
			title,
			content: post.default.render().html,
			sections: sections ?? [],
			order,
			icon,
			last_edited: "today",
			url,
			urlname: slug,
			file: slug + ".md",
			fileurl,
			github_url: `https://github.com/flame-software/flame-docs/tree/main/docs/${versionslug}/${categoryslug}/${slug}.md`,
			category: categoryslug,
		};
	} catch (e) {
		throw error(404, "File not found");
	}
}

export async function loadDocPage(
	versionslug: string,
	categoryslug: string,
	slug: string
): Promise<DocPage> {
	const result: DocPage = await loadPageData(versionslug, categoryslug, slug);

	return result;
}
