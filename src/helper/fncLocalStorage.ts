type TTheme = 'dark' | 'light';

function isTTheme(value: unknown): value is TTheme {
    return value === "dark" || value === "light";
}

export const setTheme = (value: TTheme) => {
    localStorage.setItem("theme", value);
    document.documentElement.setAttribute("data-theme", value);
}

export const getTheme = (): TTheme => {
    const theme = localStorage.getItem("theme");
    return isTTheme(theme) ? theme : 'light';
}