import './popupTheme.scss';
import { useAppSelector } from '@/redux/store/hooks';
import moon from '@image/items/moon.png';
import { useAppDispatch } from '@/redux/store/hooks';
import Theme from '@/helper/Theme';
import { TTheme } from '@/redux/slice/indexSlice';
import { SET_THEME, SET_POPUP_THEME } from '@/redux/slice/indexSlice';


const PopupTheme = () => {

    const dispatch = useAppDispatch();
    const isShow = useAppSelector(state => state.indexSlice.popupTheme);

    const onDark = () => {
        Theme.setTheme('dark');
        dispatch(SET_THEME('dark'));
        dispatch(SET_POPUP_THEME(false));
    }

    const onLight = () => {
        Theme.setTheme('light');
        dispatch(SET_THEME('light'));
        dispatch(SET_POPUP_THEME(false));
    }


    return(
        <div 
            className="popupTheme"
            style={isShow ? {transform: 'translate(50%, 0px)'} : {transform: 'translate(50%, 500px)'}} 
        >
            <div className="popupTheme__body" >
                <div className="popupTheme__up" >
                    <div className="popupTheme__img" >
                        <div className="popupTheme__img-body" >
                            <img src={moon} alt="image moon" />
                        </div>
                    </div>
                    <div className="popupTheme__title" >Включить тёмную тему?</div>
                    <div className="popupTheme__text" >Сейчас у вас включена светлая тема сайта, но вы можете включить темную.</div>
                </div>
                <div className="popupTheme__down" >
                    <button 
                        className='popupTheme__light popupTheme__button' 
                        onClick={onLight}
                    >
                        отменить
                    </button>
                    <button 
                        className='popupTheme__dark popupTheme__button'
                        onClick={onDark}
                    >
                        сменить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopupTheme;