import './lineTotalReviews.scss';
import { useState } from 'react';

const LineTotalReviews = (props) => {
    const [active, setActive] = useState(false);
    
    let items = props.arr.map((item, i) => {
        return(
            <div className={active ? 'reviews-total__line full-color' : 'reviews-total__line'} key={i}></div>
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