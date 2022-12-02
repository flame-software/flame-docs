<script lang="ts">
	import PageSidebar from "$lib/page/PageSidebar.svelte";
	import { currentpage } from "$lib/state/stores";
	import { capitalizeFirstLetter } from "$lib/utils/names";
	import {
		faChevronRight,
		faChevronDown,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let docsidebar: DocSidebarData;
</script>

<sidebar class="w-full relative">
	<section
		class="lg:fixed w-[90vw] lg:w-60 h-80 lg:h-[80vh] overflow-scroll flex flex-col gap-10"
	>
		{#each Object.entries(docsidebar.sections) as [key, section]}
			<div class="flex flex-col gap-1">
				<a
					href={section.url}
					class={`text-xl ${
						$currentpage.category == section.name ? "font-bold" : ""
					} hover:no-underline group inline-flex gap-3 items-center`}
				>
					{#if section.icon}
						<span class="text-2xl">{section.icon}</span>
					{/if}
					<span class="hover:underline"
						>{capitalizeFirstLetter(section.name)}</span
					></a
				>
				{#each section.pages as page}
					{#if page.urlname != "index"}
						<a class="py-1 flex gap-3" href={page.url}>
							{#if page.urlname == $currentpage.urlname}
								<Fa
									icon={faChevronDown}
									style="font-size: 0.8em; margin: 0.6em 0 0 0;"
								/>
								<b>{page.title}</b>
							{:else}
								<Fa
									icon={faChevronRight}
									style="font-size: 0.8em; margin: 0.6em 0 0 0;"
								/>
								<p>{page.title}</p>
							{/if}
						</a>
					{/if}
					{#if page.url == $currentpage.url}
						<div class="ml-5">
							<PageSidebar />
						</div>
					{/if}
				{/each}
			</div>
		{/each}
	</section>
</sidebar>
