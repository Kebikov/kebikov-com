import './footer.scss';
import insta from '../../resources/images/footer/insta.png';
import tel from '../../resources/images/footer/tel.png';
import viber from '../../resources/images/footer/viber.png';
import vk from '../../resources/images/footer/vk.png';


const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__icon">
                <a href={"tel:+375296949843"} className="footer__link">
                    <img src={tel} alt="tel" className="footer__img" />
                </a>
                <a href={"http://instagram.com/_u/kebikov"} className="footer__link">
                    <img src={insta} alt="tel" className="footer__img" />
                </a>
                <a href={"viber://chat?number=%2B375296949843"} className="footer__link" >
                    <img src={viber} className="footer__img" />
                </a>
                <a href={"https://vk.com/id58859701"} className="footer__link">
                    <img src={vk} alt="tel" className="footer__img" />
                </a>
            </div>
            <div className="footer__text">
                © свадебный фотограф Евгений Кебиков | Минск, Европа
            </div>
        </footer>
    )
}

export default Footer;