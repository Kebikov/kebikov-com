import './wedding.scss';
import useHelperLazyLoad from '../../hooks/useHelperLazyLoad';
import { useEffect } from 'react';
import { FC } from 'react';
import { weddingImages } from '@/helper/weddingImages';
import ImageWedding from '../ImageWedding/ImageWedding';


interface IWedding {
    link: string;
}


const Wedding: FC<IWedding> = ({
    link
}) => {

    const {entryCall, option} = useHelperLazyLoad();
    const {allImages, title} = weddingImages(link);

    useEffect(() => {
        window.scrollTo(0, 0);
        const imgObserver = new IntersectionObserver(entryCall, option);
        const pictureAll = document.querySelectorAll('picture');
        pictureAll.forEach(item => imgObserver.observe(item));
    },[link]);

    return(
        <>
            <div className="all-title">
                <div className="all-title__line"></div>
                <h1 className="all-title__text">{title}</h1>
                <div className="all-title__line"></div>
            </div>
            <div className="photo">
                {
                    allImages.map((item, i) => <ImageWedding item={item} key={i}/> )
                }
            </div>
        </>
    )
}

export default Wedding;