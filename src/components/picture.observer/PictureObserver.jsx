import '../GalleryMain/galleryMain.scss';
import { useInView } from 'react-intersection-observer';
import box from '../../resources/images/spiner/box.jpg';
import boxMobile from '../../resources/images/spiner/box-mobile.jpg';


const PictureObserver = ({item, row}) => {

    const {ref, inView} = useInView(
        { 
            rootMargin: '0px 0px 50px 0px',
            triggerOnce: true
        }
    );

    const orientation = item.orientation;

    return(
        <>
                <picture ref={ref}>
                    {   
                        inView 
                        ?
                        <>
                            <source 
                                type="image/webp"
                                srcSet={row === 4 ? item.webP : item.webPMobile}
                            />
                            <img 
                                className={'loading-img'} 
                                src={row === 4 ? item.jpg : item.jpgMobile} 
                                height={orientation ? orientation === 'horizontal' ? '1200' : '800' : null} 
                                width={orientation ? orientation === 'horizontal' ? '800' : '1200' : null} 
                                alt='Свадебное фото в Минске' 
                            />
                        </>
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
