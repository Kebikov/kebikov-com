import './header.scss';
import logoImg from '../../resources/images/header-futer/1.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    //* hooks 
    const [burger, setBurger] = useState(false);

    //* code 
    const onBurger = () => {
        setBurger(!burger);
    }
    const link = (link, text, classDiv) => {
        return(
            <li className="heder-pc__line">
                <Link to={link} className={classDiv}>{text}</Link>
            </li>
        )
    }

    const logo = () => {
        return(
            <div className="heder-pc__logo">
                <img src={logoImg} alt="my_alt" height="120" width="230"/>
            </div>
        )
    }

    const mainLink = link('/', 'Главная', '');
    const weddingsLink = link('weddings-all', 'Свадебные фотографии');
    const slideshowLink = link('slideshow', 'Slideshow');
    const articlesLink = link('articles', 'Статьи');
    const aboutMeLink = link('about-me', 'Обо мне');
    const reviewsLink = link('reviews', 'Отзывы клиентов');
    const praicePackages = link('praice-packages', 'Пакеты услуг');
    const contactsLink = link('contacts', 'Контакты');

    console.log('render');

    //* render 
    return(
        <header className="header">
            {/* меню для пк  */}
            <div className="heder-pc">
                <div className="heder-pc__body">
                    <ul className="heder-pc__left">
                        {mainLink}
                        {weddingsLink}
                        {slideshowLink}
                        {articlesLink}
                    </ul>
                    {logo()}
                    <ul className="heder-pc__right">
                        {aboutMeLink}
                        {reviewsLink}
                        {praicePackages}
                        {contactsLink}
                    </ul>
                </div>
            </div>

            {/* меню для мобильных */}
            <div className="burger">
                <div className={burger ? "burger__body active" : "burger__body"} onClick={onBurger}>
                    <div className="burger__line"></div>
                </div>
            </div>
            <div className={burger ? "menu-mob active" : "menu-mob"}>
                <ul className="menu-mob__list">
                    <div className="menu-mob__close" onClick={onBurger}></div>
                    {mainLink}
                    {weddingsLink}
                    {slideshowLink}
                    {articlesLink}
                    {aboutMeLink}
                    {reviewsLink}
                    {praicePackages}
                    {contactsLink}
                </ul>
            </div>
        </header>
    )
}

export default Header;