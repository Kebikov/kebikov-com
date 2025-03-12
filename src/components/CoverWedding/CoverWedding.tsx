import '../WeddingSeries/weddingSeries.scss';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import box from '../../resources/images/spiner/box.jpg';
import PictureTag from '../PictureTag/PictureTag';
import './types';
import { FC } from 'react';
import type { TJpgWebp } from '@/helper/getAllImages';
import type { InameSeries } from '@/pages/data/dataSeries';


interface ICoverWedding {
    nameSeries: InameSeries;
    imgObject: TJpgWebp;
}

 /** `Обложка для сводьбы.` */
const CoverWedding: FC<ICoverWedding> = ({
    nameSeries, 
    imgObject
}) => {

    const {ref, inView} = useInView(
        {
            rootMargin: '0px 0px 70px 0px',
            triggerOnce: true
        }
    );

    return(
            <Link className="wedding-series__box" to={`/weddings-all/${nameSeries.link}`} ref={ref} >
                <div className="wedding-series__item" >
                    {
                        inView 
                        ?
                        <PictureTag srcImg={imgObject.jpg} srcSource={imgObject.webp} alt='Серии свадебных фотографий' />
                        :
                        <img src={box} className='loading-img'  alt="Серии свадебных фотографий"/>
                    }
                    <div className="wedding-series__title">{nameSeries.title}</div>
                    <div className="wedding-series__sub-title">wedding day</div>
                </div>
            </Link>
    )
}

export default CoverWedding;


