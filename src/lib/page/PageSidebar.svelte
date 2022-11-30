<script lang="ts">
	import type { DocPageSidebar } from "./page";

	export let data: DocPageSidebar;

	let sections: string[] = [];
	if (data.sections) sections = data.sections;
</script>

<main class="flex flex-col gap-1">
	<h4 class="text-xl font-bold">Page sections</h4>
	{#each sections as section}
		<a
			href={`#${section}`}
			class="py-1 px-3 bg-zinc-400 bg-opacity-50 dark:bg-opacity-50 dark:hover:bg-opacity-100 dark:bg-zinc-900 hover:bg-opacity-100"
			>{section}</a
		>
	{/each}
</main>
