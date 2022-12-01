<script lang="ts">
	import Box from "$lib/elements/Box.svelte";
	import DocSidebar from "$lib/layout/DocSidebar.svelte";
	import type { DocSidebarData } from "$lib/layout/layout";
	import type { DocPage } from "$lib/page/page";

	export let data: any;
	let sidebardata: DocSidebarData = data.docsidebar;
	let activepage: DocPage = data.activepage;
</script>

<main class="grid w-full grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5">
	<div class="flex col-span-1 w-full p-5">
		<DocSidebar docsidebar={sidebardata} {activepage} />
	</div>
	<article class="col-span-1 md:col-span-3 lg:col-span-4">
		<slot />
	</article>
</main>
