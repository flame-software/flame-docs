<script lang="ts">
	import type { DocPage } from "$lib/page/page";
	import Page from "$lib/page/Page.svelte";
	import { capitalizeFirstLetter } from "$lib/utils/names";

	export let data: DocPage;
</script>

<svelte:head>
	<title
		>Flame Docs - {capitalizeFirstLetter(data.category)} - {data.title}</title
	>
</svelte:head>

{#if !data.error}
	<Page pagedata={data} />
{:else}
	{data.error}
{/if}
