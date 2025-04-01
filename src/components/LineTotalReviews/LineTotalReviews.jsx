import './lineTotalReviews.scss';
import arr from '../../pages/data/dataReviews';
import { useAppSelector } from '@/redux/store/hooks';


/**
 * @component Линия с прогрессом отзывов.
 * @returns 
 */
const LineTotalReviews = () => {

    const {activeSlidesReviews} = useAppSelector(state => state.indexSlice);


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