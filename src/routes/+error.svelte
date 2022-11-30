<script lang="ts">
	import { page } from "$app/stores";
</script>

<main class="flex flex-col gap-10 py-10">
	<h1 class="text-6xl font-bold text-center">
		{$page.status}: {$page.error.message}
	</h1>
	<a
		href="/v1/introduction"
		class="text-orange-500 underline text-4xl font-bold text-center"
		>Go Back</a
	>
</main>
