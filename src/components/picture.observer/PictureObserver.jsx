import '../GalleryMain/galleryMain.scss';
//* hooks 
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
//* img 
import box from '../../resources/images/spiner/box.jpg';
import boxMobile from '../../resources/images/spiner/box-mobile.jpg';


// Используется только в главной галерее.
//= PictureObserver 
const PictureObserver = ({item, row}) => {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const {ref, inView} = useInView(
        { 
            threshold: 0.3, 
            triggerOnce: true 
        }
    );

    const orientation = item.orientation;

    useEffect(() => {
        if(inView) {
            setIsIntersecting(true);
        }
    },[inView]);

    return(
        <>
                <picture ref={ref}>
                    {   
                        isIntersecting 
                        ?
                        <>
                            <source 
                                type="image/webp"
                                srcSet={row === 3 ? item.webP : item.webPMobile}
                            />
                            <img 
                                className={'loading-img'} 
                                src={row === 3 ? item.jpg : item.jpgMobile} 
                                height={orientation ? orientation === 'horizontal' ? '1200' : '800' : null} 
                                width={orientation ? orientation === 'horizontal' ? '800' : '1200' : null} 
                                alt='Свадебное фото в Минске' 
                            />
                        </>
                        :
                        <img 
                            className={'anime'} 
                            src={row === 3 ? boxMobile : box} 
                            alt='Свадебное фото в Минске' 
                        />
                    }
                </picture>

        </>
    )
}

export default PictureObserver;
