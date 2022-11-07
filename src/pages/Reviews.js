import './scss/reviews.scss';
import ReviewsItem from "../components/ReviewsItem/ReviewsItem";
import useGellary from '../hooks/useGellary';
import arrForReviews from './data/dataReviews';
import LineTotalReviews from '../components/LineTotalReviews/LineTotalReviews';
import { useEffect } from 'react';

const Reviews = () => {
    useGellary('.all-reviews');

    const reviewsItems = arrForReviews.map((item, i) => {
        return(
            <ReviewsItem item={item} key={i}/>
        )
    });

    return(
            <>
                <LineTotalReviews arr={arrForReviews}/>
                <div className="all-reviews">
                    <div className="use-line">
                        {reviewsItems}
                    </div>
                </div>
            </>
            
    )
}

export default Reviews;