import '../GalleryMain/galleryMain.scss';
import { useInView } from 'react-intersection-observer';
import box from '../../resources/images/spiner/box.jpg';
import boxMobile from '@/resources/images/spiner/box-mobile.jpg';
import { FC } from 'react';
import { IImage } from '../../helper/loadingImgForMainPage';


interface IPictureObserver {
    item: IImage;
    row: number;
}


const PictureObserver: FC<IPictureObserver> = ({
    item, 
    row
}) => {

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
                                className={orientation === 'horizontal' ? 'loading-img horizontal' : 'loading-img vertical'} 
                                src={row === 4 ? item.jpg : item.jpgMobile} 
                                height={orientation ? orientation === 'horizontal' ? '1200' : '800' : undefined} 
                                width={orientation ? orientation === 'horizontal' ? '800' : '1200' : undefined} 
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

