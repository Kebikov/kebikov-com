import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '@/redux/store/hooks';
import { TTheme, SET_THEME, SET_POPUP_THEME } from '@/redux/slice/indexSlice';


function isTTheme(value: unknown): value is TTheme {
    return value === "dark" || value === "light";
}

 /** `Черная тема в приоритете у пользователя ?` */
const isDarkTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;


 /** `Получение установленой темы в Local Storage.` */
export const getThemeLocalStorage = (): TTheme | undefined => {
    const theme = localStorage.getItem("theme");
    return isTTheme(theme) ? theme : undefined;
}



export const useTheme = () => {

    const dispatch = useAppDispatch();
    const theme = getThemeLocalStorage();

     /** `Если тема была до этого выбрана и она записана в LS.` */
    if(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        dispatch(SET_THEME(theme));
    }

    const setTheme = (value: TTheme) => {
        document.documentElement.setAttribute("data-theme", value);
        dispatch(SET_THEME(value));
        localStorage.setItem("theme", value);
    }

    const currentTheme = useAppSelector(state => state.indexSlice.theme);

    useEffect(() => {
        window.onload = () => {
            alert("Все ресурсы (HTML, изображения, стили, шрифты) загружены.");
            setTimeout(() => {
                /** `Первая загрузка сайта, предложение установки начальной темы.` */
                if(!theme && isDarkTheme()) {
                    dispatch(SET_POPUP_THEME(true));
                }
            }, 1000);
        };
    }, []);

    return {
        currentTheme,
        setTheme,
        getThemeLocalStorage
    }
}


  