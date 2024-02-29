import './weddingSeries.scss';
import usehelpPassAllImg from '../../hooks/usehelpPassAllImg';
import CoverWedding from '../CoverWedding/CoverWedding';
import nameSeries from '../../pages/data/dataSeries';


/**
 * Block containing components of weddings covers.
 * @example <WeddingSeries/>
 */
const WeddingSeries = () => {

    const allImg = usehelpPassAllImg(require.context('../../resources/images/weddings-series/'));
    
    return(
        <div className="wedding-series">
            { 
                nameSeries.map((item, i) => <CoverWedding nameSeries={item} imgArr={allImg[i]} key={i} /> )
            }
        </div>
    )
};

export default WeddingSeries;

