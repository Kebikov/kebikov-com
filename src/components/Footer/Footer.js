import './footer.scss';
import { Link } from "react-router-dom"
import insta from '../../resources/images/footer/insta.jpg';
import fb from '../../resources/images/footer/fb.jpg';
import ispwp from '../../resources/images/footer/ispwp.jpg';
import tel from '../../resources/images/footer/tel.jpg';
import viber from '../../resources/images/footer/viber.jpg';
import vk from '../../resources/images/footer/vk.jpg';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__img">
                <img src={ispwp} alt="ispw" height="70" width="131"/>
            </div>
            <div className="footer__icon">
                <Link to={"tel:+375296949843"} className="footer__icon-link">
                    <img src={tel} alt="tel" height="48" width="48"/>
                </Link>
                <Link to={"viber://contact?number=%2B375296949843/"} className="footer__icon-link">
                    <img src={viber} height="48" width="48"/>
                </Link>
                <Link to={"https://www.instagram.com/kebikov/"} className="footer__icon-link">
                    <img src={insta} alt="tel" height="48" width="48"/>
                </Link>
                <Link to={"https://vk.com/id58859701"} className="footer__icon-link">
                    <img src={vk} alt="tel" height="48" width="48"/>
                </Link>
                <Link to={"https://www.facebook.com/KebikovGen/"} className="footer__icon-link">
                    <img src={fb} alt="tel" height="48" width="48"/>
                </Link>
            </div>
            <div className="footer__item"></div>
        </footer>
    )
}

export default Footer;