import './scss/reviews.scss';
//import ReviewsItem from "../components/ReviewsItem/ReviewsItem";
import GellaryReviews from '../components/GellaryReviews/GellaryReviews';
//import arrForReviews from './data/dataReviews';
import LineTotalReviews from '../components/LineTotalReviews/LineTotalReviews';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import HederArticles from '../components/HederArticles/HederArticles';

const Reviews = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    //* code 


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
                    <LineTotalReviews/>
                    <GellaryReviews/>
                </div>
                
            </>
            
    )
}

export default Reviews;