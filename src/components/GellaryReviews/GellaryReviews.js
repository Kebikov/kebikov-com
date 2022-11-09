import './gellaryReviews.scss';
import { useEffect, useState } from 'react';

const GellaryReviews = ({div, reviewsItems, setActive}) => {
    useEffect(() => {
        effect();
        return () => {
            window.removeEventListener('resize', size);
            line.removeEventListener('pointerdown', startMove);
            line.removeEventListener('pointerup', endMove);
            line.removeEventListener('pointermove', moveFinger);
        }
    }, []);

    let line = document.createElement('div');
    let kidsWidth = 0;
    let kidsTotal = 0;
    let slidesCurrent = 0;
    let direction = 0;
    let dragStart = 0;
    let dragMove = 0;
    let dragEnd = 0;
    let pointNow = 0;


    
    const effect = () => {
        const element = document.querySelector(div);
        line = element.firstElementChild;
        size();
    }

    const size = () => {
        line.style.width = `${document.documentElement.clientWidth}px`;
        const elementChild = line.firstElementChild;
        kidsTotal = line.childElementCount;
        kidsWidth = elementChild.getBoundingClientRect().width;
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
                setActive(slidesCurrent);
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }else{
                slidesCurrent ++;
                setActive(slidesCurrent);
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }
        }
    }

    const ifMinusSlides = () => {
        if(direction < 0) {
            if(slidesCurrent <= 0) {
                slidesCurrent = 0;
                setActive(slidesCurrent);
                pointNow = 0;
                move(pointNow);
            }else{
                slidesCurrent --;
                setActive(slidesCurrent);
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }
        }
    }

    const move = (x) => {
        line.style.transform= `translate(${x}px, 0)`;
    }

    return(
        <div className="all-reviews">
            <div className="use-line">
                {reviewsItems}
            </div>
        </div>
    )
}

export default GellaryReviews;