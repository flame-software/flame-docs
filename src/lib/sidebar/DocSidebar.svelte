<script lang="ts">
	import PageSidebar from "$lib/sidebar/PageSidebar.svelte";
	import { capitalizeFirstLetter } from "$lib/utils/names";
	import {
		faChevronRight,
		faChevronDown,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let docsidebar: DocSidebarData;
	export let currentpage: DocPage;
</script>

<sidebar class="w-full relative">
	<section
		class="lg:fixed w-[90vw] lg:w-60 h-80 lg:h-[80vh] flex flex-col gap-10"
	>
		{#each Object.entries(docsidebar.sections) as [key, section]}
			<div class="flex flex-col gap-1">
				<a
					data-sveltekit-preload-data={true}
					href={section.url}
					class={`text-lg ${
						currentpage.category == section.name ? "font-bold" : ""
					} hover:no-underline group inline-flex mb-1 gap-3 items-center`}
				>
					{#if section.icon}
						<span class="text-2xl">{section.icon}</span>
					{/if}
					<span class="hover:underline"
						>{capitalizeFirstLetter(section.name)} ({section.pages
							.length - 1})</span
					></a
				>
				{#each section.pages as page}
					{#if page.urlname != "index"}
						<a
							data-sveltekit-preload-data={true}
							class="py-1 flex text-sm gap-3"
							href={page.url}
						>
							{#if page.url == currentpage.url}
								<Fa
									icon={faChevronDown}
									style="font-size: 0.8em; margin: 0.6em 0 0 0;"
								/>
								<b>{page.title} ({page.sections.length})</b>
							{:else}
								<Fa
									icon={faChevronRight}
									style="font-size: 0.8em; margin: 0.6em 0 0 0;"
								/>
								<p>{page.title} ({page.sections.length})</p>
							{/if}
						</a>
					{/if}
					{#if page.url == currentpage.url}
						<div class="ml-5">
							<PageSidebar {currentpage} />
						</div>
					{/if}
				{/each}
			</div>
		{/each}
	</section>
</sidebar>
