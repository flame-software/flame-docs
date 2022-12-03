<script lang="ts">
	import DocSidebar from "$lib/sidebar/DocSidebar.svelte";
	// import { currentpage } from "$lib/state/stores";

	export let data: any;
	let sidebardata: DocSidebarData = data.docsidebar;
	// let page: DocPage = data.page;
	// $currentpage = page;
</script>

<main
	class="grid h-full flex-grow items-stretch w-full grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5"
>
	<div class="flex col-span-1 w-full p-5">
		<DocSidebar currentpage={data.page} docsidebar={sidebardata} />
	</div>
	<article
		class="h-full min-h-screen col-span-1 md:col-span-3 lg:col-span-4 flex-grow border-r-4 dark:border-orange-500 border-orange-600 border-opacity-50"
	>
		<slot />
	</article>
</main>
