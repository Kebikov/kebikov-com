import './reviewsItem.scss';

const ReviewsItem = (obj) => {
    const {img, text, name, href} = obj.item;

    return(
        <div className="rewiews">
            <div className="rewiews__body">
                <img src={img} alt="" className="rewiews__picture" />
                <div className="rewiews__text">{text}</div>
                <div className="rewiews__name">{name}</div>
                <a href={href} className="rewiews__link">{href}</a>
            </div>
        </div>
    )
}

export default ReviewsItem;