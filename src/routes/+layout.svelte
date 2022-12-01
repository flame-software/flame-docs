<!-- +layout.svelte -->
<script>
	import Footer from "$lib/layout/Footer.svelte";
	import Header from "$lib/layout/Header.svelte";
	import "$lib/layout/styles.css";
	export const prerender = true;
</script>

<main
	class="min-h-screen flex flex-col w-full dark:bg-zinc-900 bg-zinc-50 dark:text-white"
>
	<Header />

	<article class="container mx-auto py-5 lg:py-10 flex-grow">
		<slot />
	</article>

	<Footer />
</main>
