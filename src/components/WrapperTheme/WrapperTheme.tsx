import React, { FC, useEffect } from "react";
import Theme from '@/helper/Theme';
import { SET_POPUP_THEME, SET_THEME } from '@/redux/slice/indexSlice';
import { useAppDispatch } from '@/redux/store/hooks';


interface IWrapperTheme {
    children: React.JSX.Element | React.JSX.Element[];
}


const WrapperTheme: FC<IWrapperTheme> = ({
    children
}) => {

    const dispatch = useAppDispatch();

    const theme = Theme.getThemeLocalStorage();
    const isDarkTheme = Theme.isDarkTheme();

    useEffect(() => {

        if(document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Запуск devTools на телефоне, только в режиме разработки.
        if (process.env.NODE_ENV === 'development') {
            import('eruda').then(eruda => {
                eruda.default.init();
                console.log('Eruda loaded.');
                console.log(`Тема установленая в LocalStorage: ${theme}`);
                console.log(`Предпочитаемае тема Dark ? => ${isDarkTheme}`);
                console.log('document.readyState = ', document.readyState);
            });
        }


        // Если тема была до этого выбрана и она записана в LS.
        if(theme) {
            document.documentElement.setAttribute("data-theme", theme);
            dispatch(SET_THEME(theme));
        }
        
        function handleLoad() {
            console.log('handleLoad work');
            // "Все ресурсы (HTML, изображения, стили, шрифты) загружены."
            setTimeout(() => {
                // Первая загрузка сайта, предложение установки начальной темы.
                if(!theme && isDarkTheme) {
                    console.log('Открытие popup.');
                    dispatch(SET_POPUP_THEME(true));
                }
            }, 3000);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default WrapperTheme;