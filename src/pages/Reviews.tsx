import './scss/reviews.scss';
import GellaryReviews from '../components/GellaryReviews/GellaryReviews';
import LineTotalReviews from '../components/LineTotalReviews/LineTotalReviews';
import { useEffect } from 'react';
import SEO from '../components/SEO/SEO';


/**
 * @page Страница с отзывами.
 * - https://kebikov.com/reviews
 * @returns 
 */
const Reviews = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return(
            <>
                <SEO
                    url='https://kebikov.com/reviews'
                    title='Отзывы Клиентов. О Свадебном фотографе Евгений Кебиков'
                    description='Отзывы от клиентов, прочитайте как все прошло.Просмотрите фото свадебного дня молодожен. Свадебный фотограф Минск,Евгений Кебиков.'
                />

                <div className="container">
                    <LineTotalReviews/>
                    <GellaryReviews/>
                </div>
                
            </>
            
    )
}

export default Reviews;