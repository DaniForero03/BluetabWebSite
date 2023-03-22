// Register iconify web component
import "iconify-icon";
// Import theme switcher
import {
    DARK_THEME,
    LIGHT_THEME,
    setTheme,
    useSystemTheme,
    applyTheme,
} from "./theme-switcher";

window.matchMedia("(prefers-color-scheme: dark)").onchange = (e) => applyTheme();

document.querySelector("button#light-button").onclick = () =>
    setTheme(LIGHT_THEME);

document.querySelector("button#dark-button").onclick = () =>
    setTheme(DARK_THEME);

document.querySelector("button#system-button").onclick = () => useSystemTheme();

applyTheme();
