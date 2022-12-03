<script>
	import { browser } from "$app/environment";
	import SvelteSeo from "svelte-seo/types/SvelteSeo";

	if (browser) {
		window.location = window.location + "v0.1/introduction";
	}
</script>

<SvelteSeo
	jsonLd={{
		"@type": "WebSite",
		headline: "Welcome to the Flame Documentation",
		image: [import.meta.env.VITE_APP_URL + "/indexbanner.png"],
		datePublished: new Date().toLocaleDateString(),
		dateModified: new Date().toLocaleDateString(),
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
		title: "Welcome to the Flame Documentation",
		description:
			"Flame's Documentation website is the single place for all information about the Flame network and plans",
		image: import.meta.env.VITE_APP_URL + "/indexbanner.png",
		imageAlt: "Homepage image",
	}}
	openGraph={{
		title: "Welcome to the Flame Documentation",
		description:
			"Flame's Documentation website is the single place for all information about the Flame network and plans",
		url: import.meta.env.VITE_APP_URL,
		type: "website",
		images: [
			{
				url: import.meta.env.VITE_APP_URL + "/indexbanner.png",
				alt: "Article thumbnail",
			},
		],
	}}
	title="Welcome to the Flame Documentation"
	description="Flame's Documentation website is the single place for all information about the Flame network and plans"
	keywords="Flame, Social, Network, Documentation, SaaS, Product, Plan, Vision, Freedom, Choice, Tech, Media"
/>

<svelte:head>
	<title>Flame Docs</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>
