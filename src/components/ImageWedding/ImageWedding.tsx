import { FC } from "react";
import Info from "../Info/Info";
import { useInView } from 'react-intersection-observer';
import type { IImageWedding } from "@/data/image/weddings/types";
import box from '../../resources/images/spiner/box.jpg';
import { SET_SHOW_IMAGE } from '../../redux/slice/indexSlice';
import { useAppDispatch } from '../../redux/store/hooks';
import { matchSlashDot } from "@/helper/matchSlashDot";

interface IIW {
    item: IImageWedding;
    press?: boolean;
    infoTest?: string;
     /** `Если изображение распологается относительно. Значение в процентах.` */
    topPercent ?: number; 
}


const ImageWedding: FC<IIW> = ({
    item,
    press = false,
    topPercent,
    infoTest
}) => {
    
    const dispatch = useAppDispatch();

    const {ref, inView} = useInView(
        { 
            rootMargin: '100px 0px 100px 0px',
            triggerOnce: true,
            threshold: 0
        }
    );

    const onPress = () => {
        document.body.style.overflow = 'hidden';
        document.addEventListener('touchmove', (e) => e.preventDefault, {passive: true})
        dispatch(SET_SHOW_IMAGE(matchSlashDot(item.jpg)));
    }


    return(
        <picture 
            className={inView ? 'loading-img' : 'anime'}
            ref={ref} 
            onClick={press ? onPress : undefined} 
            key={String(item.jpg)} 
        >
            {
                inView ?
                <>
                    {item.avif_mobile ? <source srcSet={item.avif_mobile} type="image/avif" media="(max-width: 767px)" /> : null}
                    {item.webp_mobile ? <source srcSet={item.webp_mobile} type="image/webp" media="(max-width: 767px)" /> : null}
                    {item.jpg_mobile ? <source srcSet={item.jpg_mobile} type="image/jpeg" media="(max-width: 767px)" /> : null}
                    {item.avif ? <source srcSet={item.avif} type="image/avif"/> : null}
                    {item.webp ? <source srcSet={item.webp} type="image/webp"/> : null}
                    <img src={item.jpg} alt="свадебная фотография" style={{top: topPercent ?? `${topPercent}%`}} />
                    {/* <Info name={item.jpg} match /> */}
                </>
                :
                <img src={box} height={'800px'} width={'1200px'} alt="свадебная фотография" />
            }
        </picture>
    )
}


export default ImageWedding;