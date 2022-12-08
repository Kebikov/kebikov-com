import './reviewsItem.scss';
import { useRef, useEffect } from 'react';

//= ReviewsItem 
const ReviewsItem = ({item, setReviewsItemLink}) => {
    //* hooks 
    useEffect(() => {
        setReviewsItemLink(rewiewRef.current);
    }, []);

    const rewiewRef = useRef(null);

    //* code 
    const {img, text, name, href} = item;

    const bunDrag = (e) => {
        e.target.ondragstart = () => false;
    }

    //* return 
    return(
        <div className="rewiews" ref={rewiewRef}>
            <div className="rewiews__body">
                <img src={img} alt="" className="rewiews__picture" onLoad={bunDrag}/>
                <div className="rewiews__text">{text}</div>
                <div className="rewiews__name">{name}</div>
                <a href={href} className="rewiews__link">{href}</a>
            </div>
        </div>
    )
}

export default ReviewsItem;