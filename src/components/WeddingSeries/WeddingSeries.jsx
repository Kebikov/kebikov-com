import './weddingSeries.scss';
import usehelpPassAllImg from '../../hooks/usehelpPassAllImg';
//* components 
import CoverWedding from '../cover.wedding/CoverWedding';
//* const 
import nameSeries from '../../pages/data/dataSeries';

//= WeddingSeries 
const WeddingSeries = () => {
    console.log('WeddingSeries',);
    const allImg = usehelpPassAllImg(require.context('../../resources/images/weddings-series/', false, /\.(png|jpe?g|svg|webp)$/));

    const blocks = nameSeries.map((item, i) => {
        console.log('------------',);
        return(
            <CoverWedding nameSeries={item} imgArr={allImg[i]} key={i} />
        )
    });

    return(
        <div className="wedding-series">
            {blocks}
        </div>
    )
}

export default WeddingSeries;