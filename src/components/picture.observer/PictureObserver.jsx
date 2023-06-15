import '../GalleryMain/galleryMain.scss';
//* hooks 
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
//* img 
import box from '../../resources/images/spiner/box.jpg';


//= PictureObserver 
const PictureObserver = ({item}) => {

    const refPicture = useRef(null);

    const {ref, inView} = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if(inView) {
            const source = refPicture.current;
            const img = source.nextElementSibling;
            source.srcset = item[1];
            img.src = item[0];
            img.onload = () => {
                img.className = 'loading-img';
                img.removeAttribute('height');
                img.removeAttribute('width');
            }
        }
    },[inView]);

    return(
        <picture ref={ref}>
            <source 
                ref={refPicture}
                type="image/webp"
            />
            <img 
                className={'anime'} 
                src={box} 
                height={'800px'} 
                width={'1200px'} 
                alt='Свадебное фото в Минске' 
            />
        </picture>
    )
}

export default PictureObserver;
