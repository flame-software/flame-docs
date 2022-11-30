import { loadDocPage } from "$lib/page/page";

export async function load({ params }: any) {
	return await loadDocPage(params.versionslug, params.categoryslug, "index");
}
