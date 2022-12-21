<script lang="ts">
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let title: string;
	export let last_edited: string;
	export let github_url: string;
</script>

<div class="flex flex-col gap-1">
	<h1 class="font-bold text-3xl lg:text-4xl">{title}</h1>
	<div class="flex gap-1 flex-col lg:flex-row lg:gap-5 flex-wrap">
		<!-- <h3>Last edited: {last_edited}</h3> -->
		<a
			href={github_url}
			target="_blank"
			rel="noreferrer"
			class="flex gap-2 items-center"
			>Edit on Github <Fa icon={faGithub} /></a
		>
	</div>
</div>
