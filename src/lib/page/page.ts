import { error } from "@sveltejs/kit";
import { stat } from "fs/promises";

export async function loadPageData(
	versionslug: string,
	categoryslug: string,
	slug: string
): Promise<DocPage> {
	let post = null;
	const url = `/${versionslug}/${categoryslug}/${slug}`;
	const fileurl = `../../../docs/${versionslug}/${categoryslug}/${slug}.md`;
	const srcurl =
		"docs/" + versionslug + "/" + categoryslug + "/" + slug + ".md";

	try {
		post = await import(fileurl);
	} catch (e) {
		throw error(404, "Not Found");
	}
	if (!post) throw error(404, "Not Found");

	try {
		const { title, sections, order, icon } = post.metadata;
		const stats = await stat(srcurl);

		return {
			title,
			content: post.default.render().html,
			sections: sections ?? [],
			order,
			icon,
			last_edited: stats.mtime.toDateString(),
			url,
			srcurl,
			urlname: slug,
			file: slug + ".md",
			fileurl,
			github_url: `https://github.com/flame-software/flame-docs/tree/main/src/docs/${versionslug}/${categoryslug}/${slug}.md`,
			category: categoryslug,
		};
	} catch (e) {
		throw error(404, "Not Found");
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
