import './scss/contacts.scss';
import FormContact from '../components/FormContact/FormContact';
import ava from '../resources/images/contacts/1.jpg';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";
import Social from '@/components/Social/Social';
import GoogleMap from '@/components/Map/Map';


const Contacts = () => {
    
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
                    <HeaderContacts/>
                    <Info/>
                </div>
                <FormContact color={'var(--color-light-1__to__color-black-1)'}/>
            </div>
    )
}

const HeaderContacts = () => {
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
        <div className="contacts__header">
            <div className="contacts__subtitle">
                <h1 className="contacts__title">Контакты</h1>
                <h2 className="contacts__text">Свяжитесь со мной и раскажите о вашем свадном дне.<br/>Заполните форму ниже или свяжитесь удобным для вас способом.</h2>
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
    )
}


const Info = () => {
    return(
        <div className="contacts__info">
            <GoogleMap/>
            <Social/>
        </div>
    )
}



export default Contacts;