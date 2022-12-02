<script lang="ts">
	import { currentpage } from "$lib/state/stores";
	import { capitalizeFirstLetter } from "$lib/utils/names";
	import Page from "$lib/page/Page.svelte";
</script>

<svelte:head>
	<title
		>Flame Docs - {capitalizeFirstLetter($currentpage.category)} - {$currentpage.title}</title
	>
</svelte:head>

<Page />
