import './footer.scss';


const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer__icon">
                <a href={"tel:+375296949843"} className="footer__link tel" />
                <a href={"http://instagram.com/_u/kebikov"} className="footer__link instagram" />
                <a href={"viber://chat?number=%2B375296949843"} className="footer__link viber" />
                <a href={"https://t.me/Eugene_Ghionis"} className="footer__link telegram" />
            </div>
            <div className="footer__text">
                © свадебный фотограф Евгений Кебиков | Минск, Европа
            </div>
        </footer>
    )
}

export default Footer;