<script lang="ts">
	import Content from "./Content.svelte";
	import type { DocPage } from "./page";
	import PageSidebar from "./PageSidebar.svelte";
	import Title from "./Title.svelte";

	export let pagedata: DocPage;
</script>

<section class="flex gap-5">
	<article class="col-span-4 flex flex-col gap-5 w-full flex-grow">
		<Title
			title={pagedata.title}
			last_edited={pagedata.last_edited}
			github_url={pagedata.github_url}
		/>

		<Content content={pagedata.content} />
	</article>

	<sidebar class="w-60">
		<PageSidebar data={pagedata} />
	</sidebar>
</section>
