<script>
	import ThemeSwitcher from "$lib/themes/ThemeSwitcher.svelte";
	import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
	import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";
</script>

<div class="flex gap-1 items-center font-bold">
	<a
		href="https://flamesoftware.net/"
		class="lg:inline-flex hidden py-2 px-4 text-sm gap-2 items-center"
	>
		<Fa icon={faHandPointLeft} />
		<span>To Main Website</span></a
	>
	<a
		rel="noreferrer"
		target="_blank"
		href="https://github.com/flame-software"
		class="lg:inline-flex hidden py-2 px-4 gap-2 items-center text-xl"
		><Fa icon={faGithub} /></a
	>
	<a
		rel="noreferrer"
		target="_blank"
		href="https://discord.gg/Z6qcNckczz"
		class="lg:inline-flex hidden py-2 px-4 gap-2 items-center text-xl"
		><Fa icon={faDiscord} /></a
	>
	<span class="text-xl"><ThemeSwitcher /></span>
</div>
