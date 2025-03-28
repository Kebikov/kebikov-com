import './wedding.scss';
import { FC } from 'react';
import { getWeddingImages } from '@/helper/getWeddingImages';
import ImageWedding from '../ImageWedding/ImageWedding';


interface IWedding {
    link: string;
}


const Wedding: FC<IWedding> = ({
    link
}) => {

    const {allImages, title} = getWeddingImages(link);

    return(
        <>
            <div className="all-title">
                <div className="all-title__line"></div>
                <h1 className="all-title__text">{title}</h1>
                <div className="all-title__line"></div>
            </div>
            <div className="photo">
                {
                    allImages !== undefined ?
                    allImages.map((item, i) => <ImageWedding item={item} key={i}/> )
                    :
                    null
                }
            </div>
        </>
    )
}

export default Wedding;