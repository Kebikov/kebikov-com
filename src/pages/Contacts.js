import HederArticles from "../components/HederArticles/HederArticles";
import './scss/contacts.scss';
import ava from '../resources/images/contacts/1.jpg';
import fon from '../resources/images/contacts/2.jpg';

const Contacts = () => {


    return(
            <div className="contacts">
                <div className="contacts__body">
                    <div className="contacts__header">
                        <div className="contacts__subtitle">
                            <div className="contacts__title">Контакты</div>
                            <div className="contacts__text">Свяжитесь со мной и раскажите о вашем особенном дне.<br/>Заполните форму ниже или свяжитесь удобным для вас способом.</div>
                        </div>
                        <div className="contacts__pic">
                            <img src={ava} alt="" />
                        </div>
                    </div>
                    {/* info */}
                    <div className="contacts__info">
                        {/* pic-fon */}
                        <div className="contacts__pic-fon">
                            <img src={fon} alt="" />
                        </div>
                        {/* social */}
                        <div className="contacts__social">
                            <div className="contacts__phone">
                                <span>Phone </span>
                                <a href={"tel:+375296949843"}>+375296949843</a>
                            </div>
                            <div className="contacts__line"></div>
                            <div className="contacts__address">
                                <span>Address </span>
                                г.Минск, ул.Рафиева 109/126
                            </div>
                            <div className="contacts__line"></div>
                            <div className="contacts__email">
                                <span>Email </span>
                                info@kebikov.com
                            </div>
                        </div>
                    </div>
                    
                    <div className="contacts__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.258043017564!2d27.432214916500673!3d53.856059280089084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbda6676365d11%3A0x1a813d08f394b7c2!2z0YPQu9C40YbQsCDQoNCw0YTQuNC10LLQsCAxMDksINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1668440486651!5m2!1sru!2sby" width="600" height="450" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
    )
}

export default Contacts;