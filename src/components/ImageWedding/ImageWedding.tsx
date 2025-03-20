import { FC } from "react";
import Info from "../Info/Info";
import { TJpgWebp } from "@/helper/getAllImages";
import type { IImageWedding } from "@/data/image/weddings/types";
import box from '../../resources/images/spiner/box.jpg';


interface IIW {
    item: TJpgWebp | IImageWedding;
}

const ImageWedding: FC<IIW> = ({item}) => {

    console.log('ITEM = ', item);

    return(
        <picture className='anime' key={String(item.jpg)} >
            {item.avif_mobile ? <source data-srcset={item.avif_mobile} type="image/avif" media="(max-width: 767px)" /> : null}
            {item.webp_mobile ? <source data-srcset={item.webp_mobile} type="image/webp" media="(max-width: 767px)" /> : null}
            {item.jpg_mobile ? <source data-srcset={item.jpg_mobile} type="image/jpeg" media="(max-width: 767px)" /> : null}
            {item.avif ? <source data-srcset={item.avif} type="image/avif"/> : null}
            {item.webp ? <source data-srcset={item.webp} type="image/webp"/> : null}
            <img src={box} height={'800px'} width={'1200px'} data-src={item.jpg} alt="свадебная фотография"/>
            {/* <Info name={item.jpg} match /> */}
        </picture>
    )
}

export default ImageWedding;