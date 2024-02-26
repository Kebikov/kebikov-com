import './footer.scss';
import insta from '../../resources/images/footer/insta.png';
import tel from '../../resources/images/footer/tel.png';
import viber from '../../resources/images/footer/viber.png';
import vk from '../../resources/images/footer/vk.png';


//= Footer 
const Footer = () => {
    console.log('%cFooter', 'color: green; font-size:18px;');
    
    return(
        <footer className="footer">
            <div className="footer__icon">
                <a href={"tel:+375296949843"} className="footer__link">
                    <img src={tel} className="footer__img" alt="phone number" />
                </a>
                <a href={"http://instagram.com/_u/kebikov"} className="footer__link">
                    <img src={insta} className="footer__img"  alt="logo instagram" />
                </a>
                <a href={"viber://chat?number=%2B375296949843"} className="footer__link" >
                    <img src={viber} className="footer__img" alt='logo viber' />
                </a>
                <a href={"https://vk.com/id58859701"} className="footer__link">
                    <img src={vk}  className="footer__img" alt="logo vk" />
                </a>
            </div>
            <div className="footer__text">
                © свадебный фотограф Евгений Кебиков | Минск, Европа
            </div>
        </footer>
    )
}

export default Footer;