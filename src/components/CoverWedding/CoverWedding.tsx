import '../WeddingSeries/weddingSeries.scss';
import { Link } from 'react-router-dom';
import ImageWedding from '../ImageWedding/ImageWedding';
import './types';
import { FC } from 'react';
import type { IImageWedding } from '@/data/image/weddings/types';
import type { InameSeries } from '@/pages/data/dataSeries';


interface ICoverWedding {
    nameSeries: InameSeries;
    imgObject: IImageWedding;
}

 /** `Обложка для сводьбы.` */
const CoverWedding: FC<ICoverWedding> = ({
    nameSeries, 
    imgObject
}) => {

    console.log('COVER');

    return(
            <Link className="wedding-series__box" to={`/weddings-all/${nameSeries.link}`} >
                <div className="wedding-series__item" >
                    <ImageWedding item={imgObject} infoTest='CoverWedding' />
                    <div className="wedding-series__title">{nameSeries.title}</div>
                    <div className="wedding-series__sub-title">wedding day</div>
                </div>
            </Link>
    )
}

export default CoverWedding;


