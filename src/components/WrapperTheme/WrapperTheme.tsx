import React, { FC, useEffect } from "react";
import Theme from '@/helper/Theme';
import { SET_POPUP_THEME } from '@/redux/slice/indexSlice';
import { useAppDispatch } from '@/redux/store/hooks';


interface IWrapperTheme {
    children: React.JSX.Element | React.JSX.Element[];
}


const WrapperTheme: FC<IWrapperTheme> = ({
    children
}) => {

    const dispatch = useAppDispatch();

    console.log('Wrapper');
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            import('eruda').then(eruda => eruda.default.init());
        }
    }, []);

    useEffect(() => {
        /** `Если тема была до этого выбрана и она записана в LS.` */
        const theme = Theme.getThemeLocalStorage();
        if(theme) document.documentElement.setAttribute("data-theme", theme);
        
        const handleLoad = () => {
            console.log("Все ресурсы (HTML, изображения, стили, шрифты) загружены.");
            setTimeout(() => {
                /** `Первая загрузка сайта, предложение установки начальной темы.` */
                if(!theme && Theme.isDarkTheme()) {
                    dispatch(SET_POPUP_THEME(true));
                }
            }, 1000);
        }

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default WrapperTheme;