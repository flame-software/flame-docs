<script lang="ts">
	import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";
	import type { DocPageSidebar } from "./page";

	export let data: DocPageSidebar;

	let sections: string[] = [];
	if (data.sections) sections = data.sections;
</script>

<main class="flex flex-col gap-1">
	{#each sections as section}
		<a href={`#${section}`} class="py-1 flex gap-3">
			<Fa
				icon={faChevronRight}
				style="font-size: 0.8em; margin: 0.6em 0 0 0;"
			/>
			{section}
		</a>
	{/each}
</main>
