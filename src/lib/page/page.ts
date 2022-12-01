import { stat } from "fs/promises";

interface DocPage {
	meta?: any[];
	content?: string;
	title?: string;
	sections?: string[];
	category?: string;
	last_edited?: string;
	error?: string;
	order?: number;
	github_url?: string;
	icon?: string;
}

interface DocPageSidebar {
	sections: string[];
}

export type { DocPage, DocPageSidebar };

export async function loadPageData(url: string): Promise<DocPage> {
	let post = null;

	try {
		post = await import(url);
	} catch (e) {
		return { error: "404" };
	}
	if (!post) return { error: "404" };

	try {
		const { title, sections, order, icon } = post.metadata;
		const content = post.default.render().html;

		return {
			title,
			content,
			sections,
			order,
			icon,
		};
	} catch (e) {
		return { error: "500" };
	}
}

export async function loadDocPage(
	versionslug: string,
	categoryslug: string,
	slug: string
): Promise<DocPage> {
	const result: DocPage = await loadPageData(
		`../../docs/${versionslug}/${categoryslug}/${slug}.md`
	);

	if (result.error) {
		return {
			error: result.error,
		};
	}

	let stats = await stat(
		"src/docs/" + versionslug + "/" + categoryslug + "/index.md"
	);

	return {
		...result,
		last_edited: stats.mtime.toDateString(),
		github_url: `https://github.com/flame-software/flame-docs/tree/main/src/docs/${versionslug}/${categoryslug}/${slug}.md`,
		category: categoryslug,
	};
}
