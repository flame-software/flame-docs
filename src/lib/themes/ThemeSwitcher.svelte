<script lang="ts">
	import { browser } from "$app/environment";
	import { getCookie, setCookie } from "$lib/utils/cookies";

	function switchTheme() {
		let theme = getCookie("theme");
		if (theme == "light") {
			setCookie("theme", "dark", 100);
			for (const btn of document.getElementsByClassName("themeButton")) {
				btn.innerHTML = "🌙";
			}
			document.getElementsByTagName("body")[0].classList = "dark";
		} else {
			setCookie("theme", "light", 100);
			for (const btn of document.getElementsByClassName("themeButton")) {
				btn.innerHTML = "⛱️";
			}
			document.getElementsByTagName("body")[0].classList = "light";
		}
	}
</script>

<button on:click={switchTheme} class="py-2 px-4 themeButton"
	>{browser && getCookie("theme") == "dark" ? "🌙" : "⛱️"}</button
>
