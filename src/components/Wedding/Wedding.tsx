import './wedding.scss';
import { FC } from 'react';
import ImageWedding from '../ImageWedding/ImageWedding';
import { dataWeddingSeries } from '@/data/dataWeddingSeries';
import { TSeries } from '@/data/dataWeddingSeries/types';
import WeddingSeries from '../WeddingSeries/WeddingSeries';

interface IWedding {
    link: TSeries;
}


const Wedding: FC<IWedding> = ({
    link
}) => {


    return(
        <>
            <div className="all-title">
                <div className="all-title__line"></div>
                <h1 className="all-title__text">
                    {
                        dataWeddingSeries[link].title
                    }
                </h1>
                <div className="all-title__line"></div>
            </div>
            {
                dataWeddingSeries[link].description ?
                <div className="wedding-description" >
                    <div className="wedding-description__body" >
                        {
                            dataWeddingSeries[link].description
                        }
                    </div>
                </div>
                : 
                null
            }
            <div className="photo">
                {
                    dataWeddingSeries[link].images.map((item, i) => <ImageWedding item={item} key={i}/> )
                }
            </div>
            <div className="still-weddings" >
                <div className="still-weddings__body" >
                    <WeddingSeries/>
                </div>
            </div>
        </>
    )
}

export default Wedding;