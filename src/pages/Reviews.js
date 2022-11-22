import './scss/reviews.scss';
import ReviewsItem from "../components/ReviewsItem/ReviewsItem";
import GellaryReviews from '../components/GellaryReviews/GellaryReviews';
import arrForReviews from './data/dataReviews';
import LineTotalReviews from '../components/LineTotalReviews/LineTotalReviews';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import HederArticles from '../components/HederArticles/HederArticles';

const Reviews = ({setLineHeader}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        setLineHeader(false);

        return() => {
            setLineHeader(true);
        }
    },[]);

    //* code 
    const [active, setActive] = useState(0);

    const reviewsItems = arrForReviews.map((item, i) => {
        return(
            <ReviewsItem item={item} key={i}/>
        )
    });

    //* return 
    return(
            <>
                <Helmet>
                    <title>Отзывы Клиентов. О Свадебном фотографе Евгений Кебиков</title>
                    <meta
                        name="description"
                        content="Отзывы от клиентов, прочитайте как все прошло.Просмотрите фото свадебного дня молодожен. Свадебный фотограф Минск,Евгений Кебиков."
                    />
                    <link rel="canonical" href="https://kebikov.com/reviews"/>
                </Helmet>
                <HederArticles title={'Отзывы клиентов'}/>
                <div className="container">
                    <LineTotalReviews arr={arrForReviews} active={active}/>
                    <GellaryReviews div={'.all-reviews'} reviewsItems={reviewsItems} setActive={setActive}/>
                </div>
                
            </>
            
    )
}

export default Reviews;