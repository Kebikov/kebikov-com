import '../GalleryMain/galleryMain.scss';
//* hooks 
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
//* img 
import box from '../../resources/images/spiner/box.jpg';


//= PictureObserver 
const PictureObserver = ({item}) => {

    const refPicture = useRef(null);

    const {ref, inView} = useInView({ threshold: 0, triggerOnce: true });

    useEffect(() => {
        if(inView && item[0]) {
            const source = refPicture.current;
            const img = source.nextElementSibling;

            img.onload = () => {
                console.log('Загрузилось !', item[0]);
                img.className = 'loading-img';
            }

            source.srcset = item[1];
            console.log('IMG = ', img, inView);
            img.src = item[0];

        }
    },[inView]);

    if(inView) {
        console.log(item[0]);
    }

    return(
        <picture ref={ref}>
            <source 
                ref={refPicture}
                type="image/webp"
                srcSet={null}
            />
            <img 
                className={'anime'} 
                src={box} 
                height={'800'} 
                width={'1200'} 
                alt='Свадебное фото в Минске' 
            />
        </picture>
    )
}

export default PictureObserver;
