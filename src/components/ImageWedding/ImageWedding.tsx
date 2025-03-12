import { FC } from "react";
import Info from "../Info/Info";
import { TJpgWebp } from "@/helper/getAllImages";
import box from '../../resources/images/spiner/box.jpg';


interface IImageWedding {
    item: TJpgWebp;
}

const ImageWedding: FC<IImageWedding> = ({item}) => {
    return(
        <picture className='anime' key={String(item.jpg)} >
            <source data-srcset={item.webp} type="image/webp"/>
            <img src={box} height={'800px'} width={'1200px'} data-src={item.jpg} alt="свадебная фотография"/>
            {/* <Info name={item.jpg} match /> */}
        </picture>
    )
}

export default ImageWedding;