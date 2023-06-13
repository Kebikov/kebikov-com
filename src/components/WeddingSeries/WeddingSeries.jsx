import './weddingSeries.scss';
import usehelpPassAllImg from '../../hooks/usehelpPassAllImg';
//* components 
import CoverWedding from '../cover.wedding/CoverWedding';
//* const 
import nameSeries from '../../pages/data/dataSeries';

//= WeddingSeries 
const WeddingSeries = ({plusClass}) => {

    const allImg = usehelpPassAllImg(require.context('../../resources/images/weddings-series/', false, /\.(png|jpe?g|svg|webp)$/));


    const blocks = nameSeries.map((item, i) => {
        return(
            <CoverWedding nameSeries={item} imgArr={allImg[i]} key={i} />
        )
    });

    const classPlus = `wedding-series ${plusClass}`;

    return(
        <div className={classPlus}>
            {blocks}
        </div>
    )
}

export default WeddingSeries;