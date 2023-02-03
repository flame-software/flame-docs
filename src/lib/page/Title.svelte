<script lang="ts">
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let title: string;
	export let last_edited: string;
	export let github_url: string;
</script>

<div class="flex justify-between gap-1">
	<h1 class="font-bold text-3xl lg:text-4xl">{title}</h1>
	<div class="flex gap-5 items-end lg:flex-row lg:gap-5 flex-wrap">
		<!-- <h3 class="text-gray-600 dark:text-gray-400">
			Last edited: {last_edited}
		</h3> -->
		<a
			href={github_url}
			target="_blank"
			rel="noreferrer"
			class="flex gap-2 items-center text-gray-600 dark:text-gray-400"
			>Edit on Github <Fa icon={faGithub} /></a
		>
	</div>
</div>
