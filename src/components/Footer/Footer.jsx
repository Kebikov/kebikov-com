import './footer.scss';
import insta from '../../resources/images/footer/insta.png';
import tel from '../../resources/images/footer/tel.png';
import viber from '../../resources/images/footer/viber.png';


//= Footer 
const Footer = () => {

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
                <a href={"https://t.me/Eugene_Ghionis"} className="footer__link telegram">
                    {/* <img src={telegram}  className="footer__img telegram" alt="logo telegram" /> */}
                </a>
            </div>
            <div className="footer__text">
                © свадебный фотограф Евгений Кебиков | Минск, Европа
            </div>
        </footer>
    )
}

export default Footer;