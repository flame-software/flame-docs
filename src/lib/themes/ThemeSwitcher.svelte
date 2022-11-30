<script lang="ts">
	import { browser } from "$app/environment";
	import { getCookie, setCookie } from "$lib/utils/cookies";
	import { onMount } from "svelte";

	let themeButton: HTMLElement;

	function switchTheme() {
		let theme = getCookie("theme");
		if (theme == "light") {
			setCookie("theme", "dark", 100);
			themeButton.innerHTML = "🌙";
			document.getElementsByTagName("body")[0].classList = "dark";
		} else {
			setCookie("theme", "light", 100);
			themeButton.innerHTML = "⛱️";
			document.getElementsByTagName("body")[0].classList = "light";
		}
	}
</script>

<button on:click={switchTheme} bind:this={themeButton} id="themeButton"
	>{browser && getCookie("theme") == "dark" ? "🌙" : "⛱️"}</button
>
