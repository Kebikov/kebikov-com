import './types';
import { FC } from 'react';


interface IPictureTag {
     /** `Ссылка на jpg.` */
    srcImg: string;
     /** `Ссылка на webp.` */
    srcSource: string;
     /** `Текст в alt атрибуте.` */
    alt: string;
}


const PictureTag: FC<IPictureTag> = ({
    srcImg, 
    srcSource, 
    alt
}) => {

    return(
        <picture>
            <source srcSet={srcSource} type="image/webp"/>
            <img src={srcImg} alt={alt}/>
        </picture>
    )
}

export default PictureTag;