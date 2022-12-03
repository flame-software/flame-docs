import { loadDocPage } from "$lib/page/page";

export async function load({ params }: any) {
	const page = await loadDocPage(
		params.versionslug,
		params.categoryslug,
		params.slug ?? "index"
	);

	return {
		page,
	};
}
