import './gellaryReviews.scss';
import { useEffect, useRef } from 'react';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import arrForReviews from '../../pages/data/dataReviews';
import { useDispatch } from 'react-redux';
import { setActiveSlidesReviews } from '../../redux/slice/indexSlice';


/**
 * @component Галерея отзывов.
 */
const GellaryReviews = () => {
    console.log('GellaryReviews');
    
    let line;
    let kidsWidth = 0;
    let kidsTotal = 0;
    let slidesCurrent = 0;
    let direction = 0;
    let dragStart = 0;
    let dragMove = 0;
    let dragEnd = 0;
    let pointNow = 0;
    let reviewsItemLink;

    const dispatch = useDispatch();
    const refUseLine = useRef(null);
    
    const effect = () => {
        line = refUseLine.current;
        size();
    }

    const size = () => {
        line.style.width = `${document.documentElement.clientWidth}px`;
        kidsTotal = line.childElementCount;
        kidsWidth = reviewsItemLink.getBoundingClientRect().width;
        events();
    }

    const events = () => {
        window.addEventListener('resize', size);
        if(window.innerWidth > 1200) {
            line.addEventListener('pointerdown', startMove);
            line.addEventListener('pointerup', endMove);
        }else{
            line.removeEventListener('pointerdown', startMove);
            line.removeEventListener('pointerup', endMove);
            move(0);
        }
    }

    const startMove = (e) => {
        line.style.transform= `translate(${pointNow}px, 0)`;
        dragStart = e.pageX;
        line.addEventListener('pointermove', moveFinger);
    }

    const moveFinger = (e) => {
        line.classList.remove('trans');
        dragMove = e.pageX;
        move(pointNow + dragMove - dragStart);
    }

    const endMove = (e) => {
        dragEnd = e.pageX;
        direction = dragStart - dragEnd;
        line.removeEventListener('pointermove', moveFinger);
        line.classList.add('trans');
        ifPlusSlides();
        ifMinusSlides();
    }

    const ifPlusSlides = () => {
        if(direction > 0) {
            if(slidesCurrent >= kidsTotal - 3) {
                slidesCurrent = kidsTotal - 3;
                dispatch(setActiveSlidesReviews(slidesCurrent));
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }else{
                slidesCurrent ++;
                dispatch(setActiveSlidesReviews(slidesCurrent));
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }
        }
    }

    const ifMinusSlides = () => {
        if(direction < 0) {
            if(slidesCurrent <= 0) {
                slidesCurrent = 0;
                dispatch(setActiveSlidesReviews(slidesCurrent));
                pointNow = 0;
                move(pointNow);
            }else{
                slidesCurrent --;
                dispatch(setActiveSlidesReviews(slidesCurrent));
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }
        }
    }

    const move = (x) => {
        line.style.transform= `translate(${x}px, 0)`;
    }

    const setReviewsItemLink = (link) => {
        reviewsItemLink = link;
    }

    const reviewsItems = arrForReviews.map((item, i) => {
        return(
            <ReviewsItem item={item} key={i} setReviewsItemLink={setReviewsItemLink}/>
        )
    });

    useEffect(() => {
        effect();
        return () => {
            window.removeEventListener('resize', size);
            line.removeEventListener('pointerdown', startMove);
            line.removeEventListener('pointerup', endMove);
            line.removeEventListener('pointermove', moveFinger);
        }
    }, []);


    return(
        <div className="all-reviews">
            <div className="use-line" ref={refUseLine}>
                {reviewsItems}
            </div>
        </div>
    )
}

export default GellaryReviews;