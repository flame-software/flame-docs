<script lang="ts">
	import DocSidebar from "$lib/layout/DocSidebar.svelte";
	import { currentpage } from "$lib/state/stores";

	export let data: any;
	let sidebardata: DocSidebarData = data.docsidebar;
	let page: DocPage = data.page;
	$currentpage = page;
</script>

<main class="grid w-full grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5">
	<div class="flex col-span-1 w-full p-5">
		<DocSidebar docsidebar={sidebardata} />
	</div>
	<article class="col-span-1 md:col-span-3 lg:col-span-4">
		<slot />
	</article>
</main>
