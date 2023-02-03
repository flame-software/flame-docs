<script>
	import Socials from "./Socials.svelte";
</script>

<header
	class="bg-white dark:bg-black shadow-lg text-lg flex items-center font-bold z-50 w-screen fixed h-20"
>
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
			</span>
		</div>

		<nav class="flex gap-1 items-center">
			<Socials />
		</nav>
	</section>
</header>
