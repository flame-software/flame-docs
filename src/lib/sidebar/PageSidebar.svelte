<script lang="ts">
	import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let currentpage: DocPage;

	function test() {
		// console.log(window.screen.height + " | " + window.screen);
	}
</script>

<main class="flex flex-col gap-1 text-sm">
	{#each currentpage.sections as section}
		<a
			on:click={test}
			href={`#${section}`}
			class="py-1 flex gap-2 hover:no-underline"
		>
			<span>—</span>
			<p class="hover:underline">{section}</p>
		</a>
	{/each}
</main>
