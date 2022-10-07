import { useEffect, useState } from "react";

const lightTheme = {
    bgColor: "white",
    textColor: "black"
};

const darkTheme = {
    bgColor: "black",
    textColor: "green"
};

const themeKey = "theme";
const ThemeMode = {
    Dark: "dark",
    Light: "light"
};

const isDarkModeEnabled = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
const setDarkModeCachedValue = (value) =>
    window.localStorage.setItem(
        themeKey,
        value ? ThemeMode.Dark : ThemeMode.Light
    );
const getTheme = (darkMode) => (darkMode ? darkTheme : lightTheme);
const getDarkModeCachedValue = () => {
    const state = window.localStorage.getItem(themeKey);
    if (state !== null) {
        return state === ThemeMode.Dark;
    }
    return state;
};

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(
        getDarkModeCachedValue() ?? isDarkModeEnabled()
    );
    const [theme, setTheme] = useState(getTheme(darkMode));

    useEffect(() => {
        setDarkModeCachedValue(darkMode);
        setTheme(getTheme(darkMode));
    }, [darkMode]);

    return { darkMode, setDarkMode, theme };
}
