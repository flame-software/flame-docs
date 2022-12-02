import { browser } from "$app/environment";
import { getCookie, setCookie } from "$lib/utils/cookies";
import { writable } from "svelte/store";

export const theme = writable(browser ? getCookie("theme") : "light");

theme.subscribe((value) => {
	if (browser) {
		setCookie("theme", value, 100);
		document.getElementsByTagName("body")[0].classList = value;
	}
});
