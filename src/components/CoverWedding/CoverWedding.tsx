import './coverWedding.scss';
import '../WeddingSeries/weddingSeries.scss';
import { Link } from 'react-router-dom';
import ImageWedding from '../ImageWedding/ImageWedding';
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


    return(
        <Link 
            className="coverWedding" 
            to={`/weddings-all/${nameSeries.link}`} 
        >
            <div className="coverWedding__item" >
                <ImageWedding item={imgObject} infoTest='CoverWedding' />
                <div className="coverWedding__title">{nameSeries.title}</div>
                <div className="coverWedding__sub-title">wedding day</div>
            </div>
        </Link>
    )
}

export default CoverWedding;


