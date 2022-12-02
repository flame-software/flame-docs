import { loadDocPage } from "$lib/page/page";
import { getSidebarData } from "$lib/sidebar/sidebar";

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
