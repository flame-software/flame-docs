<script lang="ts">
	export let content: string;
</script>

<article class="prose w-full max-w-none dark:prose-invert">
	{#if content.length > 0}
		{@html content}
	{:else}
		<div class="text-center flex justify-center flex-col gap-5">
			<h4 class="text-2xl font-bold">Nothing to see here yet... 💤</h4>
			<img
				src="https://media.tenor.com/lg74K0p1qrgAAAAC/shocked-cat.gif"
				alt="oh no!"
				class="w-2/3 lg:w-1/2 mx-auto"
			/>
		</div>
	{/if}
</article>
