<script lang="ts">
	export let content: string;
</script>

<article class="prose w-full max-w-none dark:prose-invert">
	{#if content.length > 0}
		{@html content}
	{:else}
		<h4 class="text-2xl font-bold text-black py-20 text-center">
			Nothing to see here yet... 💤
		</h4>
	{/if}
</article>
