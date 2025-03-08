import './showImage.scss';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/store/hooks';
import { useAppDispatch } from '../../redux/store/hooks';
import { SET_SHOW_IMAGE } from '../../redux/slice/indexSlice';
import supportsWebP from 'supports-webp';

const ShowImage = () => {

    const [isSupportWebp, setIsSupportWebp] = useState<boolean>();

    const image = useAppSelector(state => state.indexSlice.nameShowImage);
    const dispatch = useAppDispatch();

    const onPressClose = () => {
        document.body.style.overflow = 'auto';
        dispatch(SET_SHOW_IMAGE(undefined));
    }

    useEffect(() => {
        supportsWebP
            .then(supported => {
                setIsSupportWebp(supported);
            });
    }, []);

    return(
        <div 
            className="showImage"
            style={
                image ?
                {display: 'flex'}
                : 
                {display: 'none'}
            }
        >
            <div className='showImage__close' onClick={onPressClose}></div>
            <div className="showImage__body">
                <div className="showImage__img" >
                    {
                        isSupportWebp ?
                            <img src={image ? require(`../../resources/images/main-page/${image}.webp`) : undefined} alt="#" />
                            :
                            <img src={image ? require(`../../resources/images/main-page/${image}.jpg`) : undefined} alt="#" />
                    }
                </div>
            </div>
        </div>
    )
}

export default ShowImage;

