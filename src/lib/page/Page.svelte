<script lang="ts">
	import Box from "$lib/elements/Box.svelte";
	import { currentpage } from "$lib/state/stores";
	import Content from "./Content.svelte";
	import Title from "./Title.svelte";
</script>

<Box>
	<article class="col-span-4 flex flex-col gap-5 w-full flex-grow">
		<Title
			title={$currentpage.title}
			last_edited={$currentpage.last_edited}
			github_url={$currentpage.github_url}
		/>

		<Content content={$currentpage.content} />
	</article>
</Box>
