<script lang="ts">
	import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let currentpage: DocPage;
</script>

<main class="flex flex-col gap-1 text-sm">
	{#each currentpage.sections as section}
		<a href={`#${section}`} class="py-1 flex gap-3">
			<Fa
				icon={faChevronRight}
				style="font-size: 0.8em; margin: 0.6em 0 0 0;"
			/>
			{section}
		</a>
	{/each}
</main>
