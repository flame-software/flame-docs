<script>
	import ThemeSwitcher from "$lib/themes/ThemeSwitcher.svelte";
	import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";
</script>

<header class="py-1 bg-black text-white text-lg font-bold">
	<section class="container mx-auto flex justify-between items-center">
		<div class="flex gap-1 items-center">
			<a href="/v1/introduction" class="py-2 px-4">
				<img src="/logo.png" class="w-10 h-10" alt="Flame Logo" />
			</a>
			<a href="/v1/introduction" class="py-2 px-4"
				>Documentation
				<span class="text-gray-400">v0.1</span>
			</a>
		</div>

		<nav class="flex gap-1 items-center">
			<a href="https://flamesoftware.net/" class="py-2 px-4 text-sm"
				>To Main Website</a
			>
			<button class="py-2 px-4 text-xl"><ThemeSwitcher /></button>
			<a
				rel="noreferrer"
				target="_blank"
				href="https://github.com/flame-software"
				class="py-2 px-4 text-xl"><Fa icon={faGithub} /></a
			>
			<a
				rel="noreferrer"
				target="_blank"
				href="https://discord.gg/Z6qcNckczz"
				class="py-2 px-4 text-xl"><Fa icon={faDiscord} /></a
			>
		</nav>
	</section>
</header>

<h5 class="bg-orange-500 text-black font-bold text-center py-1">
	This website is an early function-first design, and might chance
	significantly in the future
</h5>
