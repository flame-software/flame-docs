<script>
	import { browser } from "$app/environment";

	if (browser) {
		window.location = window.location + "v0.1/introduction";
	}
</script>

<svelte:head>
	<title>Flame Docs</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>
