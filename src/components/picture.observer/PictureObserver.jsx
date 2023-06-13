import '../GalleryMain/galleryMain.scss';
//* hooks 
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
//* img 
import box from '../../resources/images/spiner/box.jpg';


//= PictureObserver 
const PictureObserver = ({item}) => {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const [isLoad, setIsLoad] = useState(false);

    const onLoading = (e) => {
        console.log('Load', e.target);
        setIsLoad(true);
    }

    const {ref, inView} = useInView({ threshold: 0, triggerOnce: true });

    useEffect(() => {
        if(inView) {
            setIsIntersecting(true);
        }
    },[inView]);

    return(
        <div ref={ref} >
            <picture>
                {
                    isIntersecting ?
                    <>
                        <source type="image/webp" srcSet={isLoad ? item[1] : null} />
                        <img 
                            onLoad={onLoading} 
                            className={isLoad ? 'loading-img' : 'anime'} 
                            src={item[0]} 
                            height={'800px'} 
                            width={'1200px'} 
                            alt='Свадебное фото в Минске' 
                        />
                    </>
                    :
                    <img className='anime' src={box} height={'800px'} width={'1200px'} alt='Свадебное фото в Минске' />
                }
            </picture>
        </div>
    )
}

export default PictureObserver;