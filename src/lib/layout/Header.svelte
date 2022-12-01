<script>
	import Socials from "./Socials.svelte";
</script>

<header class="py-1 bg-black text-white text-lg font-bold">
	<section class="container mx-auto flex justify-between items-center">
		<div class="flex gap-1 items-center">
			<a
				href="/v0.1/introduction"
				class="py-2 px-4 hover:scale-110 duration-150"
			>
				<img src="/logo.png" class="w-10 h-10" alt="Flame Logo" />
			</a>
			<span
				class="py-2 px-4 flex lg:items-center flex-col lg:flex-row gap-0 lg:gap-2"
				>Documentation
				<span class="text-gray-400">v0.1</span>
			</span>
		</div>

		<nav class="flex gap-1 items-center">
			<Socials />
		</nav>
	</section>
</header>

<h5
	class="bg-orange-500 text-black font-bold text-center py-2 flex items-center gap-3 justify-center"
>
	This website is an early function-first design, and might change
	significantly in the future
</h5>
