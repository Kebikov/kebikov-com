import './scss/useGellary.scss';
import { useEffect, useState } from 'react';

function useGellary (div) {
    useEffect(() => {
        effect();
        return () => {
            window.removeEventListener('resize', size);
            window.removeEventListener('pointerdown', startMove);
            window.removeEventListener('pointerup', endMove);
            window.removeEventListener('pointermove', moveFinger);
        }
    }, []);

    const [activeSlide, setActiveSlide] = useState(0);

    let line = document.createElement('div');
    let kidsWidth = 0;
    let kidsTotal = 0;
    let slidesCurrent = 0;
    let direction = 0;
    let dragStart = 0;
    let dragMove = 0;
    let dragEnd = 0;
    let pointNow = 0;

    //for total line
    let arrLines = null;
    
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
        if(document.documentElement.clientWidth > 1200) {
            window.addEventListener('pointerdown', startMove);
            window.addEventListener('pointerup', endMove);
        }else{
            window.removeEventListener('pointerdown', startMove);
            window.removeEventListener('pointerup', endMove);
            move(0);
        }
    }

    const startMove = (e) => {
        line.style.transform= `translate(${pointNow}px, 0)`;
        dragStart = e.pageX;

        window.addEventListener('pointermove', moveFinger);
    }

    const moveFinger = (e) => {
        line.classList.remove('trans');
        dragMove = e.pageX;
        move(pointNow + dragMove - dragStart);
    }

    const endMove = (e) => {
        dragEnd = e.pageX;
        direction = dragStart - dragEnd;
        window.removeEventListener('pointermove', moveFinger);
        line.classList.add('trans');
        ifPlusSlides();
        ifMinusSlides();
    }

    const ifPlusSlides = () => {
        if(direction > 0) {
            if(slidesCurrent >= kidsTotal - 3) {
                slidesCurrent = kidsTotal - 3;
                setActiveSlide(slidesCurrent);
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }else{
                slidesCurrent ++;
                setActiveSlide(slidesCurrent);
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }
        }
    }

    const ifMinusSlides = () => {
        if(direction < 0) {
            if(slidesCurrent <= 0) {
                slidesCurrent = 0;
                setActiveSlide(slidesCurrent);
                pointNow = 0;
                move(pointNow);
            }else{
                slidesCurrent --;
                setActiveSlide(slidesCurrent);
                pointNow = -slidesCurrent * kidsWidth;
                move(pointNow);
            }
        }
    }

    const move = (x) => {
        line.style.transform= `translate(${x}px, 0)`;
        //addColorLines();
    }
}

export default useGellary;