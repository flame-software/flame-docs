<script lang="ts">
	import Page from "$lib/page/Page.svelte";
	import { currentpage } from "$lib/state/stores";
	import { capitalizeFirstLetter } from "$lib/utils/names";
</script>

<svelte:head>
	<title
		>Flame Docs - {capitalizeFirstLetter($currentpage.category)} - {$currentpage.title}</title
	>
</svelte:head>

<Page />
