<script lang="ts">
	import { browser } from "$app/environment";
	import { theme } from "$lib/state/stores";

	let themeButton: HTMLElement;

	function switchTheme() {
		console.log($theme);
		if ($theme == "light") {
			theme.set("dark");
			themeButton.innerHTML = "🌙";
		} else {
			theme.set("light");
			themeButton.innerHTML = "⛱️";
		}
	}
</script>

<button
	type="none"
	on:click={switchTheme}
	class="py-2 px-4 hover:scale-110 duration-150"
	bind:this={themeButton}>{browser && $theme == "dark" ? "🌙" : "⛱️"}</button
>
