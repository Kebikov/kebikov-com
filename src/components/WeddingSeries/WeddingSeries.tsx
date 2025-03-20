import './weddingSeries.scss';
import getAllImages from '../../helper/getAllImages';
import CoverWedding from '../CoverWedding/CoverWedding';
import nameSeries from '../../pages/data/dataSeries';


/**
 * Block containing components of weddings covers.
 * @example <WeddingSeries/>
 */
const WeddingSeries = () => {
    
    const {images} = getAllImages(require.context('../../resources/images/weddings-series/', false, /\.(png|jpe?g|svg|webp)$/));

    return(
        <div className="wedding-series">
            { 
                nameSeries.map((item, i) => <CoverWedding nameSeries={item} imgObject={images[i]} key={i} /> )
            }
        </div>
    )
};


export default WeddingSeries;

