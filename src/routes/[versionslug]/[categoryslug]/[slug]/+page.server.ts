import { loadDocPage } from "$lib/page/page";
import { getSidebarData } from "$lib/sidebar/sidebar";
import { redirect } from "@sveltejs/kit";

export async function load({ params }: any) {
	if (params.slug == "index") {
		throw redirect(
			301,
			"/" + params.versionslug + "/" + params.categoryslug
		);
	}

	const page = await loadDocPage(
		params.versionslug,
		params.categoryslug,
		params.slug
	);

	return { page };
}
