import './formContact.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const FormContact = () => {
    const text = 'Проверьте через e-mail, свободна ли ваша дата?!\n\nили позвоните\n\n+375 29 694 98 43 (Евгений)\n\nВы можете написать в соц.сети.';
    return(
            <div className="contact">
                <div className="contact__body">
                    <div className="contact__text">{text}</div>
                        <Formik
                            initialValues={{
                                email: '',
                                text: ''
                            }}
                            validationSchema = {Yup.object({
                                email: Yup.string().email('Неправильный email адрес!').required('Обязательное поле для заполнения!'),
                                text: Yup.string().min(5, "Минимум 5 символов!").required('Обязательное поле для заполнения!')
                            })}
                            onSubmit = {value => {
                                console.log('отправка:',value);
                                let formData = new FormData(f)

                                // fetch('mail.php',{method: 'POST', body: value})
                                // .then(data => {
                                //     if(data.status === 200){
                                //         console.log('send ok',);
                                //     }    
                                // });
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
                                <button type="submit" className='contact__button'>Отправить</button>
                            </Form>
                        </Formik>
                </div>
            </div>
    )
}

export default FormContact;