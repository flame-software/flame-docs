<script lang="ts">
	import { capitalizeFirstLetter } from "$lib/utils/names";
	import SvelteSeo from "svelte-seo";
	import Page from "$lib/page/Page.svelte";

	export let data: any;
	let page: DocPage = data.page;

	function findFirstImageUrl(text: string): string | null {
		let regex = "<imgs.*?src=(?:'|\")([^'\">]+)(?:'|\")";
		let image_x = text.match(regex);
		if (image_x && image_x?.length > 0) return image_x[0];
		return null;
	}
</script>

<SvelteSeo
	jsonLd={{
		"@type": "Article",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": page.fileurl,
		},
		headline: page.title,
		image: [
			import.meta.env.VITE_APP_URL + findFirstImageUrl(page.content) ??
				"",
		],
		datePublished: page.last_edited,
		dateModified: page.last_edited,
		publisher: {
			"@type": "Organization",
			name: "Flame Software",
			logo: {
				"@type": "ImageObject",
				url: import.meta.env.VITE_APP_URL + "/logo.png",
			},
		},
	}}
	twitter={{
		site: "@FlameCommsApp",
		title:
			"Flame Docs - " +
			capitalizeFirstLetter(page.category) +
			" - " +
			page.title,
		description: page.content
			.replace(/<\/?[^>]+(>|$)/g, "")
			.replace(/^\s*[\r\n]/gm, "")
			.substring(0, 150),
		image:
			import.meta.env.VITE_APP_URL + findFirstImageUrl(page.content) ??
			"",
		imageAlt: "Article thumbnail",
	}}
	openGraph={{
		title:
			"Flame Docs - " +
			capitalizeFirstLetter(page.category) +
			" - " +
			page.title,
		description: page.content
			.replace(/<\/?[^>]+(>|$)/g, "")
			.replace(/^\s*[\r\n]/gm, "")
			.substring(0, 150),
		url: import.meta.env.VITE_APP_URL + page.url,
		type: "article",
		images: [
			{
				url:
					import.meta.env.VITE_APP_URL +
						findFirstImageUrl(page.content) ?? "",
				alt: "Article thumbnail",
			},
		],
	}}
	title="Flame Docs - {capitalizeFirstLetter(page.category)} - {page.title}"
	description={page.content
		.replace(/<\/?[^>]+(>|$)/g, "")
		.replace(/^\s*[\r\n]/gm, "")
		.substring(0, 150)}
	keywords={page.title.replaceAll(" ", ", ") +
		", " +
		page.category +
		", " +
		page.title.replaceAll(" ", ", ") +
		", " +
		page.sections.toString().replaceAll(",", ", ") +
		", " +
		page.last_edited +
		", " +
		page.urlname}
/>

<svelte:head>
	<title
		>Flame Docs - {capitalizeFirstLetter(page.category)} - {page.title}</title
	>
</svelte:head>

<Page data={data.page} />
