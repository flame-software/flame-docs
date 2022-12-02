<script lang="ts">
	import { capitalizeFirstLetter } from "$lib/utils/names";
	import Page from "$lib/page/Page.svelte";

	export let data: any;
</script>

<svelte:head>
	<title
		>Flame Docs - {capitalizeFirstLetter(data.page.category)} - {data.page
			.title}</title
	>
</svelte:head>

<Page data={data.page} />
