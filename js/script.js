'use strict';
//menu
document.addEventListener('click', (event) => {
    let elTarget = event.target;

    if(elTarget.closest('.burger__body')){
        document.querySelector('.menu-mob').classList.add('active');
        document.querySelector('.burger').classList.add('active');
        document.querySelector('body').classList.add('active');
    }

    if(elTarget.closest('.menu-mob__close')){
        document.querySelector('.menu-mob').classList.remove('active');
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('body').classList.remove('active');
    }
});

const hi = document.documentElement.clientHeight / 2;

//lazy
document.addEventListener('DOMContentLoaded', (e) => {
    const myObserver = new IntersectionObserver((entryAll, observer) => {
        entryAll.forEach((item) => {
            if(item.isIntersecting) {
                let itemTarget = item.target;
                let parent = itemTarget.parentElement;
                let sourceAll = parent.querySelectorAll('source');
                sourceAll.forEach((item) => {
                    item.srcset = item.dataset.srcset;
                });
                itemTarget.src = itemTarget.dataset.src;
                observer.unobserve(itemTarget);
            }
        });
    },
    {
    rootMargin: `0px 0px ${hi}px 0px`, 
    });

    const imgAll = document.querySelectorAll('.lazy');
    imgAll.forEach((item) => myObserver.observe(item));
});

//burger scroll
const logo = document.querySelector('.heder-pc__logo');

const burger = document.querySelector('.burger');


window.addEventListener('scroll', (event) => {
    let logoTop = logo.getBoundingClientRect().top;
    let burgerTop = burger.getBoundingClientRect().top;
    if(logoTop + 80 <= burgerTop ) {
        burger.classList.add('fixed');
    }else{
        burger.classList.remove('fixed');
    }
});
