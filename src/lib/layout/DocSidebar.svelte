<script lang="ts">
	import { capitalizeFirstLetter } from "$lib/utils/names";
	import type { DocSidebarData } from "./layout";

	export let docsidebar: DocSidebarData;
</script>

<sidebar class="flex flex-col gap-1">
	<h2 class="text-xl font-bold">Table of contents</h2>
	<br />
	{#each Object.entries(docsidebar.sections) as [key, section]}
		<a href={`/v1/${section.name}`} class="text-lg font-bold"
			>{capitalizeFirstLetter(section.name)}</a
		>
		{#each Object.entries(section.pages) as [pagekey, page]}
			{#if page.filename != "index"}
				<a
					class="py-1 px-3 bg-zinc-400 bg-opacity-50 dark:bg-opacity-50 dark:hover:bg-opacity-100 dark:bg-zinc-900 hover:bg-opacity-100"
					href={page.url}>{page.title}</a
				>
			{/if}
		{/each}
		<br />
	{/each}
</sidebar>
