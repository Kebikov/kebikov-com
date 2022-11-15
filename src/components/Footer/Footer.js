import './footer.scss';
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
                <a href={"tel:+375296949843"} className="footer__icon-a">
                    <img src={tel} alt="tel" height="48" width="48"/>
                </a>
                <a href={"viber://chat?number=%2B375296949843"} className="footer__icon-a">
                    <img src={viber} height="48" width="48"/>
                </a>
                <a href={"http://instagram.com/_u/kebikov"} className="footer__icon-a">
                    <img src={insta} alt="tel" height="48" width="48"/>
                </a>
                <a href={"https://vk.com/id58859701"} className="footer__icon-a">
                    <img src={vk} alt="tel" height="48" width="48"/>
                </a>
                <a href={"https://www.facebook.com/KebikovGen/"} className="footer__icon-a">
                    <img src={fb} alt="tel" height="48" width="48"/>
                </a>
            </div>
            <div className="footer__item"></div>
        </footer>
    )
}

export default Footer;