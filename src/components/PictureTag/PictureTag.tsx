import './types';
import { FC } from 'react';
import type { TJpgWebp } from '@/helper/getAllImages';


interface IPictureTag {
    imgObject: TJpgWebp;
     /** `Текст в alt атрибуте.` */
    alt: string;
}


const PictureTag: FC<IPictureTag> = ({
    imgObject,
    alt
}) => {

    console.log('imgObject = ', imgObject);

    return(
        <picture> 
            {imgObject.avif_mobile ? <source srcSet={imgObject.avif_mobile} type="image/avif" media="(max-width: 767px)" /> : null}
            {imgObject.webp_mobile ? <source srcSet={imgObject.webp_mobile} type="image/webp" media="(max-width: 767px)" /> : null}
            {imgObject.jpg_mobile ? <source srcSet={imgObject.jpg_mobile} type="image/jpeg" media="(max-width: 767px)" /> : null}
            {imgObject.avif ? <source srcSet={imgObject.avif} type="image/avif"/> : null}
            {imgObject.webp ? <source srcSet={imgObject.webp} type="image/webp"/> : null}
            <img src={imgObject.jpg} alt={alt}/>
        </picture>
    )
}

export default PictureTag;