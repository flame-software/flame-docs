import { redirect } from "@sveltejs/kit";

export async function load({ params }: any) {
	if (params.slug == "index") {
		throw redirect(
			301,
			"/" + params.versionslug + "/" + params.categoryslug
		);
	}
}
