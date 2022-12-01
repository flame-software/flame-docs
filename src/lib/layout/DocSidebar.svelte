<script lang="ts">
	import type { DocPage } from "$lib/page/page";
	import PageSidebar from "$lib/page/PageSidebar.svelte";
	import { capitalizeFirstLetter } from "$lib/utils/names";
	import {
		faChevronRight,
		faChevronDown,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";
	import type { DocSidebarData } from "./layout";

	export let docsidebar: DocSidebarData;
	export let activepage: DocPage;
</script>

<sidebar class="flex flex-col gap-5 w-full">
	{#each Object.entries(docsidebar.sections) as [key, section]}
		<div class="flex flex-col gap-1">
			<a
				href={section.url}
				class="text-xl font-bold hover:no-underline group inline-flex gap-3 items-center"
			>
				{#if section.icon}
					<span class="text-2xl">{section.icon}</span>
				{/if}
				<span class="hover:underline"
					>{capitalizeFirstLetter(section.name)}</span
				></a
			>
			{#each Object.entries(section.pages) as [pagekey, page]}
				{#if page.filename != "index"}
					<a class="py-1 flex gap-3" href={page.url}>
						{#if page.title == activepage.title}
							<Fa
								icon={faChevronDown}
								style="font-size: 0.8em; margin: 0.6em 0 0 0;"
							/>
						{:else}
							<Fa
								icon={faChevronRight}
								style="font-size: 0.8em; margin: 0.6em 0 0 0;"
							/>
						{/if}
						{page.title}
					</a>
				{/if}
				{#if page.title == activepage.title}
					<div class="ml-5">
						<PageSidebar data={activepage} />
					</div>
				{/if}
			{/each}
		</div>
	{/each}
</sidebar>
