import { error } from "@sveltejs/kit";

import { stat } from "fs/promises";

import path from "path";

export async function loadPageData(
	versionslug: string,
	categoryslug: string,
	slug: string
): Promise<DocPage> {
	let post = null;
	const url = `/${versionslug}/${categoryslug}/${slug}`;
	const fileurl = path.resolve(
		process.cwd(),
		"docs/" + versionslug + "/" + categoryslug + "/" + slug + ".md"
	);

	try {
		post = await import(fileurl);
	} catch (e) {
		throw error(404, e + " VIA IMPORT");
	}
	if (!post) throw error(404, "Not Found");

	try {
		const { title, sections, order, icon } = post.metadata;
		const stats = await stat(fileurl);

		return {
			title,
			content: post.default.render().html,
			sections: sections ?? [],
			order,
			icon,
			last_edited: stats.mtime.toDateString(),
			url,
			urlname: slug,
			file: slug + ".md",
			fileurl,
			github_url: `https://github.com/flame-software/flame-docs/tree/main/docs/${versionslug}/${categoryslug}/${slug}.md`,
			category: categoryslug,
		};
	} catch (e) {
		throw error(404, e + " VIA POST METADATA");
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
