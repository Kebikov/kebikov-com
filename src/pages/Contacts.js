import './scss/contacts.scss';
import FormContact from '../components/FormContact/FormContact';
import ava from '../resources/images/contacts/1.jpg';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

const Contacts = () => {
    const motAva = {
        hidden: {
            x: 700,
            rotate: 180
        },
        visible: {
            x: 0,
            rotate: 0,
            transition: {
                duration: 1,
                delay: 0.5
            }
        }
    }


    return(
            <div className="contacts container">
                <Helmet>
                    <title>Контакты Для Связи. Выберите Удобный Для Вас Способ !</title>
                    <meta
                        name="description"
                        content="Контакты для связи со мной, адресс, телефон, почта, так же ссылка Вконтакте и Инстаграмм. Свадебный фотограф Евгений Кебиков, Минск."
                    />
                    <link rel="canonical" href="https://kebikov.com/contacts"/>
                </Helmet>

                <div className="contacts__body">
                    <div className="contacts__header">
                        <div className="contacts__subtitle">
                            <h1 className="contacts__title">Контакты</h1>
                            <div className="contacts__text">Свяжитесь со мной и раскажите о вашем особенном дне.<br/>Заполните форму ниже или свяжитесь удобным для вас способом.</div>
                        </div>
                        <motion.div
                            variants={motAva}
                            initial={'hidden'}
                            animate={'visible'}
                            className="contacts__pic"
                        >
                            <img src={ava} alt="аватар" />
                        </motion.div>
                    </div>
                    {/* info */}
                    <div className="contacts__info">
                        {/* map */}
                        <div className="contacts__map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.258043017564!2d27.432214916500673!3d53.856059280089084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbda6676365d11%3A0x1a813d08f394b7c2!2z0YPQu9C40YbQsCDQoNCw0YTQuNC10LLQsCAxMDksINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1668440486651!5m2!1sru!2sby" loading="lazy"></iframe>
                        </div>
                        {/* social */}
                        <div className="contacts__social">
                            <div className="contacts__info-block">
                                <span>Phone<br/></span>
                                <a href={"tel:+375296949843"}>+375296949843</a>
                            </div>
                            <div className="contacts__info-block">
                                <span>Address<br/></span>
                                г.Минск, ул.Рафиева 109/126
                            </div>
                            <div className="contacts__info-block">
                                <span>Email<br/></span>
                                info@kebikov.com
                            </div>
                        </div>
                    </div>
                </div>
                <FormContact color={'#f1ece7'}/>
            </div>
    )
}

export default Contacts;