import './weddingSeries.scss';
import usehelpPassAllImg from '../../hooks/usehelpPassAllImg';
import useHelperLazyLoad from '../../hooks/useHelperLazyLoad';
import box from '../../resources/images/spiner/box.jpg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const nameSeries = [['Максим & Юля', 'MY'], ['Паша & Таня', 'PT'], ['Дима & Алина', 'DA'], ['Саша & Юля', 'SY'], ['Дима & Ксюша', 'DK'], ['Саша & Даша', 'SD'], ['Саша & Люда', 'SL'], ['Никита & Катя', 'NK'], ['Женя & Даша', 'JD']];

const WeddingSeries = (props) => {
    //* hooks 
    useEffect(() => {
        const imgObserver = new IntersectionObserver(entryCall, option);
        const pictureAll = document.querySelectorAll('picture');
        pictureAll.forEach(item => imgObserver.observe(item));
    },[]);
    const {entryCall, option} = useHelperLazyLoad();
    
    //* code 
    const allImg = usehelpPassAllImg(require.context('../../resources/images/weddings-series/', false, /\.(png|jpe?g|svg|webp)$/));

    const series = (i) => {
        return( 
            <Link className="wedding-series__box" to={`/weddings-all/${nameSeries[i][1]}`} key={allImg[i]}>
                <div className="wedding-series__item">
                    <picture >
                        <source data-srcset={allImg[i][1]} type="image/webp"/>
                        <img src={box} height={'800px'} width={'1200px'} data-src={allImg[i][0]} alt="Серии свадебных фотографий"/>
                    </picture>
                    <div className="wedding-series__title">{nameSeries[i][0]}</div>
                    <div className="wedding-series__sub-title">wedding day</div>
                </div>
            </Link>
        )
    }

    const seriesBlocks = nameSeries.map((item, i) => {
        return series(i);
    });

    const classPlus = `wedding-series ${props.plusClass}`;
    
    return(
        <div className={classPlus}>
            {seriesBlocks}
        </div>
    )
}

export {WeddingSeries, nameSeries};