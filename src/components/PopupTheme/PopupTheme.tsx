import './popupTheme.scss';
import { useAppSelector } from '@/redux/store/hooks';


const PopupTheme = () => {

    const isShow = useAppSelector(state => state.indexSlice.popupTheme);

    return(
        <div 
            className="popupTheme"
            style={isShow ? {transform: 'translate(50%, 0px)'} : {transform: 'translate(50%, 500px)'}} 
        >
        </div>
    )
}

export default PopupTheme;