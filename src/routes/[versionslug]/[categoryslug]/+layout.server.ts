import { loadDocPage } from "$lib/page/page";
import { getSidebarData } from "$lib/sidebar/sidebar";

export async function load({ params }: any) {
	const docsidebar: DocSidebarData = await getSidebarData(params.versionslug);
	const page = await loadDocPage(
		params.versionslug,
		params.categoryslug,
		params.slug ?? "index"
	);

	return {
		docsidebar,
		page,
	};
}
