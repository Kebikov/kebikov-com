import './scss/reviews.scss';
import ReviewsItem from "../components/ReviewsItem/ReviewsItem";
import GellaryReviews from '../components/GellaryReviews/GellaryReviews';
import arrForReviews from './data/dataReviews';
import LineTotalReviews from '../components/LineTotalReviews/LineTotalReviews';
import { useEffect, useState } from 'react';

const Reviews = () => {
    const [active, setActive] = useState(0);

    const reviewsItems = arrForReviews.map((item, i) => {
        return(
            <ReviewsItem item={item} key={i}/>
        )
    });

    return(
            <>
                <LineTotalReviews arr={arrForReviews} active={active}/>
                <GellaryReviews div={'.all-reviews'} reviewsItems={reviewsItems} setActive={setActive}/>
            </>
            
    )
}

export default Reviews;