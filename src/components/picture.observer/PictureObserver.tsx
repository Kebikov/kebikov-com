import '../GalleryMain/galleryMain.scss';
import { useInView } from 'react-intersection-observer';
import box from '../../resources/images/spiner/box.jpg';
import boxMobile from '@/resources/images/spiner/box-mobile.jpg';
import { FC } from 'react';
import { IImage } from '../../helper/loadingImgForMainPage';
import { SET_SHOW_IMAGE } from '../../redux/slice/indexSlice';
import { useAppDispatch } from '../../redux/store/hooks';
import Info from '../Info/Info';


interface IPictureObserver {
    item: IImage;
    row: number;
}


const PictureObserver: FC<IPictureObserver> = ({
    item, 
    row
}) => {

    const dispatch = useAppDispatch();

    const {ref, inView} = useInView(
        { 
            rootMargin: '0px 0px 50px 0px',
            triggerOnce: true
        }
    );

    const orientation = item.orientation;

    const onPress = () => {
        //console.log(item.name);
        document.body.style.overflow = 'hidden';
        document.addEventListener('touchmove', (e) => e.preventDefault, {passive: true})
        dispatch(SET_SHOW_IMAGE(item.name))
    }

    return(
        <>
            <picture 
                ref={ref}
                onClick={onPress}
            >
                {   
                    inView 
                    ?
                    <picture style={{position: 'relative'}}>
                        <source 
                            type="image/webp"
                            srcSet={row === 4 ? item.webP : item.webPMobile}
                        />
                        <img 
                            className={'loading-img'} 
                            src={row === 4 ? item.jpg : item.jpgMobile} 
                            height={orientation ? orientation === 'horizontal' ? '1200' : '800' : undefined} 
                            width={orientation ? orientation === 'horizontal' ? '800' : '1200' : undefined} 
                            data-img={item.name}
                            alt='Свадебное фото в Минске' 
                        />
                        {/* <Info name={item.jpg} match /> */}
                    </picture>
                    :
                    <img 
                        className={'anime'} 
                        src={row === 4 ? boxMobile : box} 
                        alt='Свадебное фото в Минске' 
                    />
                }
            </picture>
        </>
    )
}

export default PictureObserver;

