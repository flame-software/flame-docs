<script lang="ts">
	import Box from "$lib/elements/Box.svelte";
	import Content from "./Content.svelte";
	import Title from "./Title.svelte";

	export let data: DocPage;
</script>

<Box>
	<article class="col-span-4 flex flex-col gap-5 w-full flex-grow">
		<Title
			title={data.title}
			last_edited={data.last_edited}
			github_url={data.github_url}
		/>

		<Content content={data.content} />
	</article>
</Box>
