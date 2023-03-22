import storage from "./storage.js";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

const setTheme = (theme) => {
    storage.set("theme", theme);
    applyTheme();
};

const useSystemTheme = () => {
    if (storage.exists("theme")) {
        storage.delete("theme");
    }
    applyTheme();
};

const toggleTheme = () => {
    if (storage.exists("theme")) {
        if (storage.get("theme") === DARK_THEME) {
            setTheme(LIGHT_THEME);
        } else {
            setTheme(DARK_THEME);
        }
    }
};

const getSystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return DARK_THEME;
    } else {
        return LIGHT_THEME;
    }
};

const applyTheme = () => {
    const theme = storage.exists("theme")
        ? storage.get("theme")
        : getSystemTheme();

    if (theme === DARK_THEME) {
        document.documentElement.classList.add(DARK_THEME);
    } else {
        document.documentElement.classList.remove(DARK_THEME);
    }
};

export {
    DARK_THEME,
    LIGHT_THEME,
    setTheme,
    useSystemTheme,
    toggleTheme,
    getSystemTheme,
    applyTheme,
};
