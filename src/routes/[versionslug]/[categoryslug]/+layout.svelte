<script lang="ts">
	import DocSidebar from "$lib/sidebar/DocSidebar.svelte";

	export let data: any;
	let sidebardata: DocSidebarData = data.docsidebar;
</script>

<main
	class="flex h-full flex-col lg:flex-row flex-grow items-stretch w-full gap-5"
>
	<div class="flex w-80 p-5">
		<DocSidebar currentpage={data.page} docsidebar={sidebardata} />
	</div>
	<article
		class="h-full min-h-screen w-full flex-grow border-r-4 dark:border-orange-500 border-orange-600 border-opacity-50"
	>
		<slot />
	</article>
</main>
