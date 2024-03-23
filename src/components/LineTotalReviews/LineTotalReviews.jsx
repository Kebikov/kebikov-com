import './lineTotalReviews.scss';
import arr from '../../pages/data/dataReviews';
import { useSelector } from 'react-redux';


/**
 * @component Линия с прогрессом отзывов.
 * @returns 
 */
const LineTotalReviews = () => {
    console.log('LineTotalReviews');

    const {activeSlidesReviews} = useSelector(state => state);


    let items = arr.map((item, i) => {
        return(
            <div 
                className={
                    i === activeSlidesReviews || i === activeSlidesReviews + 1 || i === activeSlidesReviews + 2 
                    ? 
                    'reviews-total__line full-color' 
                    : 
                    'reviews-total__line'
                } 
                key={i}
            ></div>
        )
    });


    return(
        <div className="reviews-total">
            <div className="reviews-total__body">
                {items}
            </div>
        </div>
    )
}

export default LineTotalReviews;