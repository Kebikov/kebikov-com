import { TTheme } from '@/redux/slice/indexSlice';


function isTTheme(value: unknown): value is TTheme {
    return value === "dark" || value === "light";
}


class Theme {

     /** `Получение установленой темы в Local Storage.` */
    getThemeLocalStorage(): TTheme | undefined {
        const theme = localStorage.getItem("theme");
        return isTTheme(theme) ? theme : undefined;
    }

     /** `Черная тема в приоритете у пользователя ?` */
    isDarkTheme() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

     /** `Установка темы в html и localStorage` */
    setTheme(value: TTheme) {
        document.documentElement.setAttribute("data-theme", value);
        localStorage.setItem("theme", value);
    }

}

export default new Theme();
