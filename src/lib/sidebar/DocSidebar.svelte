<script lang="ts">
	import PageSidebar from "$lib/sidebar/PageSidebar.svelte";
	import { capitalizeFirstLetter } from "$lib/utils/names";
	import {
		faChevronRight,
		faChevronDown,
		faCertificate,
	} from "@fortawesome/free-solid-svg-icons";
	import { onMount } from "svelte";
	import Fa from "svelte-fa";
	import { writable, type Writable } from "svelte/store";

	export let docsidebar: DocSidebarData;
	export let currentpage: DocPage;

	let doc: HTMLElement;
	let height: number;
	let y: Writable<number> = writable();

	onMount(() => {
		y.subscribe((value) => {
			let max = document.body.offsetHeight - 150;
			let viewheight = value + height + 150;
			if (window.screen.width > 1000 && viewheight >= max) {
				doc.classList.replace("lg:fixed", "lg:absolute");
				doc.style.bottom = 50 + "px";
			} else {
				doc.classList.replace("lg:absolute", "lg:fixed");
				doc.style.bottom = "unset";
			}
		});
	});
</script>

<div class="hidden lg:fixed lg:absolute" />

<svelte:window bind:scrollY={$y} />

<sidebar class="w-full relative">
	<section
		class="lg:fixed w-[90vw] lg:w-60 max-h-80 lg:max-h-[90vh] overflow-y-scroll flex flex-col gap-10"
		bind:this={doc}
		bind:clientHeight={height}
	>
		{#each Object.entries(docsidebar.sections) as [key, section]}
			<div class="flex flex-col gap-1">
				<a
					href={section.url}
					class={`text-lg ${
						currentpage.category == section.name ? "font-bold" : ""
					} hover:no-underline group inline-flex mb-1 gap-3 items-center`}
				>
					{#if section.icon}
						{section.icon}
					{/if}
					<span class="hover:underline"
						>{capitalizeFirstLetter(section.name)} ({section.pages
							.length - 1})</span
					></a
				>
				{#each section.pages as page}
					{#if page.urlname != "index"}
						<a class="py-1 flex text-base gap-3" href={page.url}>
							{#if page.url == currentpage.url}
								<Fa
									icon={faChevronDown}
									style="font-size: 0.8em; margin: 0.4em 0 0 0;"
								/>
								<b>{page.title}</b>
							{:else}
								<Fa
									icon={faChevronRight}
									style="font-size: 0.8em; margin: 0.6em 0.2em 0 0;"
								/>
								<p>{page.title}</p>
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
