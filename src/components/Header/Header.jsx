import './header.scss';
import logoImg from '../../resources/images/header/1.jpg';
import { NavLink } from 'react-router-dom';
//*redux
import { useSelector, useDispatch } from 'react-redux';
import { setActiveMenu } from '../../redux/slice/indexSlice';

//= Header 
const Header = () => {
    //* code 
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const onBurger = () => {
        dispatch(setActiveMenu(!state.activeMenu));
    }

    const onBurgerFalse = () => {
        dispatch(setActiveMenu(false));
    }

    const link = (link, title, classId, classLi) => {

        const end = link === '/' ? true : false;

        return(
            <li className={classLi}>
                {end ? <NavLink end to={link} onClick={onBurgerFalse} className={( ({isActive}) => (isActive ? `${classId} activeLink` : classId) )}>{title}</NavLink> : <NavLink to={link} onClick={onBurgerFalse} className={( ({isActive}) => (isActive ? `${classId} activeLink` : classId) )}>{title}</NavLink>}
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

    //links to pages
    const main = {link: '/', title: 'Главная'};
    const weddings = {link: 'weddings-all', title: 'Свадебные серии'};
    const slideshow = {link: 'slideshow', title: 'Slideshow'};
    const articles = {link: 'articles', title: 'Статьи'};
    const aboutMe = {link: 'about-me', title: 'Обо мне'};
    const reviews = {link: 'reviews', title: 'Отзывы клиентов'};
    const praice = {link: 'price-packages', title: 'Пакеты услуг'};
    const contacts = {link: 'contacts', title: 'Контакты'};
    

    //* render 
    return(
        <header className="header">
            {/* menu for pc  */}
            <div className="heder-pc">
                <div className="heder-pc__body">
                    <ul className="heder-pc__left">
                        {link(main.link, main.title, 'heder-pc__link', 'heder-pc__line')}
                        {link(weddings.link, weddings.title, 'heder-pc__link', 'heder-pc__line')}
                        {link(articles.link, articles.title, 'heder-pc__link', 'heder-pc__line')}
                        {link(aboutMe.link, aboutMe.title, 'heder-pc__link', 'heder-pc__line')}
                    </ul>
                    {logo()}
                    <ul className="heder-pc__right">
                        {link(reviews.link, reviews.title, 'heder-pc__link', 'heder-pc__line')}
                        {link(praice.link, praice.title, 'heder-pc__link', 'heder-pc__line')}
                        {link(contacts.link, contacts.title, 'heder-pc__link', 'heder-pc__line')}
                    </ul>
                </div>
            </div>

            {/* menu for mobile phone */}
            <div className={state.activeMenu ? "burger active" : "burger"}>
                <div className={state.activeMenu ? "burger__body active" : "burger__body"} onClick={onBurger}>
                    <div className="burger__line"></div>
                </div>
            </div>
            <div className={state.activeMenu ? "menu-mob active" : "menu-mob"}>
                <ul className="menu-mob__list">
                    <div className="menu-mob__close" onClick={onBurger}></div>
                    {link(main.link, main.title, 'menu-mob__link', 'menu-mob__line')}
                    {link(weddings.link, weddings.title, 'menu-mob__link', 'menu-mob__line')}
                    {link(articles.link, articles.title, 'menu-mob__link', 'menu-mob__line')}
                    {link(aboutMe.link, aboutMe.title, 'menu-mob__link', 'menu-mob__line')}
                    {link(reviews.link, reviews.title, 'menu-mob__link', 'menu-mob__line')}
                    {link(praice.link, praice.title, 'menu-mob__link', 'menu-mob__line')}
                    {link(contacts.link, contacts.title, 'menu-mob__link', 'menu-mob__line')}
                </ul>
            </div>
            {state.lineHeader ? <div className="header__bottom-line"/> : null}
        </header>
    )
}

export default Header;