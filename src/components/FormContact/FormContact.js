import './formContact.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EmailAnime from '../emailAnime/EmailAnime';
import { useState } from 'react';


const FormContact = ({color}) => {
    const [animeEmail, setAnimeEmail] = useState(false);
    const [message, setMessage] = useState('');
    const text = 'Проверьте через e-mail, свободна ли ваша дата?!\n\nили позвоните\n\n+375 29 694 98 43 (Евгений)\n\nВы можете написать в соц.сети.';
    
    const anime = animeEmail ? <EmailAnime message={message}/> : null;
    console.log('',color);

    return(
        <>
            {anime}
            <div className="contact">
                <div className="contact__body">
                    <div className="contact__body-after" style={{background: `linear-gradient(to top left, rgba(42,43,48,0) 50%, ${color} 50.5%)`}}/>
                    <div className="contact__body-before" style={{background: `linear-gradient(to top right, rgba(42,43,48,0) 50%, ${color} 50.5%)`}}/>
                    <div className="contact__text">{text}</div>
                        <Formik
                            initialValues={{
                                email: '',
                                text: ''
                            }}
                            validationSchema = {Yup.object({
                                email: Yup.string().email('Неправильный email адрес!').required('Обязательное поле для заполнения!'),
                                text: Yup.string().min(5, "Минимум 5 символов!").required('Обязательное поле для заполнения!'),
                                check: Yup.number().min(5,'Не правильный ответ!').max(5,'Не правильный ответ!').required('Обязательное поле для заполнения!')
                            })}
                            onSubmit = {value => {
                                const formData = new FormData();

                                formData.set("email", value.email);
                                formData.set("message", value.text);

                                value.email = '';
                                        value.text = '';
                                        value.check = '';

                                fetch('mail.php',{method: 'POST', body: formData})
                                .then(data => {
                                    setMessage('отправка письма...');
                                    setAnimeEmail(true);

                                    if(data.status === 200){
                                        console.log('send ok');
                                        setMessage('Спасибо, письмо отправлено !');
                                        setTimeout(() => {
                                            setAnimeEmail(false);
                                        }, 2000);
                                        
                                    }else{
                                        console.log('not');
                                        setMessage('Извините, произошла ошибка !');
                                        setTimeout(() => {
                                            console.log('not');
                                            setAnimeEmail(false);
                                        }, 3000);
                                    }
                                });
                            }}
                            >
                            <Form className="contact__form">
                                <label htmlFor="email"  className='contact__label'>Ваша почта</label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    className='contact__email'
                                    placeholder='Email'
                                />
                                <ErrorMessage className='error' name='email' component={'div'}/>
                                <label htmlFor="text" className='contact__label'>Ваше сообщение</label>
                                <Field as='textarea' 
                                    id="text"
                                    name="text"
                                    className='contact__textarea'
                                    placeholder='Сообшение...'
                                    rows='3'
                                />
                                <ErrorMessage className='error' name='text' component={'div'}/>
                                <Field 
                                    id="text"
                                    name="check"
                                    className='contact__check'
                                    placeholder='Введите ответ цифрой: два плюс три'
                                />
                                <ErrorMessage className='error' name='check' component={'div'}/>
                                <button type="submit" className='contact__button'>Отправить</button>
                            </Form>
                        </Formik>
                </div>
            </div>
        </>
    )
}


export default FormContact;