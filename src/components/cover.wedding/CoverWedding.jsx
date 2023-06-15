import '../WeddingSeries/weddingSeries.scss';
//* hooks 
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
//* img 
import box from '../../resources/images/spiner/box.jpg';


//= CoverWedding 
const CoverWedding = ({nameSeries, imgArr}) => {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const {ref, inView} = useInView(
        {
            threshold: 0.3,
            triggerOnce: true
        }
    );

    useEffect(() => {
        if(inView) {
            setIsIntersecting(true);
        }
    },[inView]);

    return(
            <Link className="wedding-series__box" to={`/weddings-all/${nameSeries.link}`} ref={ref} key={imgArr}>
                <div className="wedding-series__item">
                    {
                        isIntersecting ?
                        <picture >
                            <source srcSet={imgArr[1]} type="image/webp"/>
                            <img src={imgArr[0]} height={'800px'} width={'1200px'} alt="Серии свадебных фотографий"/>
                        </picture>
                        :
                        <img src={box} className='loading-img' height={'800px'} width={'1200px'} alt="Серии свадебных фотографий"/>
                    }
                    <div className="wedding-series__title">{nameSeries.title}</div>
                    <div className="wedding-series__sub-title">wedding day</div>
                </div>
            </Link>
    )
}

export default CoverWedding;

