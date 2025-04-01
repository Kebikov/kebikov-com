import './weddingSeries.scss';
import CoverWedding from '../CoverWedding/CoverWedding';
import dataSeries from '../../pages/data/dataSeries';
import { IMG_wedding_series } from '@/data/image/wedding-series';


/**
 * Block containing components of weddings covers.
 * @example <WeddingSeries/>
 */
const WeddingSeries = () => {

    return(
        <div className="wedding-series">
            { 
                dataSeries.map((item, i) => <CoverWedding nameSeries={item} imgObject={IMG_wedding_series[i]} key={IMG_wedding_series[i].jpg} /> )
            }
        </div>
    )
};


export default WeddingSeries;

