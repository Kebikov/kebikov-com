import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks';
import { SET_THEME } from '@/redux/slice/indexSlice';


type TTheme = 'dark' | 'light';

function isTTheme(value: unknown): value is TTheme {
    return value === "dark" || value === "light";
}


export const getThemeLocalStorage = (): TTheme => {
    const theme = localStorage.getItem("theme");
    return isTTheme(theme) ? theme : 'light';
}


export const useTheme = () => {

    const dispatch = useAppDispatch();

    const setTheme = (value: TTheme) => {
        document.documentElement.setAttribute("data-theme", value);
        dispatch(SET_THEME(value));
        localStorage.setItem("theme", value);
    }

    /** 
     * `Переключение свитчера.` 
     * if > isChecked === true > видна луна
     */
    //const [isChecked, setIsChecked] = useState<boolean>(true);
    const currentTheme = useAppSelector(state => state.indexSlice.theme);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches;
        console.log('mediaQuery = ', mediaQuery);

        const theme = getThemeLocalStorage();
        setTheme(theme);
    }, []);


    return {
        currentTheme,
        setTheme
    }
}