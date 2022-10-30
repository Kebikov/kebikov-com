import './formContact.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const FormContact = () => {

    return(
        <>
            <div className="contact">
                <div className="contact__body">
                    <div className="contact__text"></div>
                    <div className="contact__form">
                        <Formik
                            initialValues={{
                                email: '',
                                text: ''
                            }}>
                            <Form>
                                <label htmlFor="email">Ваша почта</label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                />
                                <ErrorMessage className='error' name='email' component={'div'}/>
                                <label htmlFor="text">Ваше сообщение</label>
                                <Field as='textarea' 
                                    id="text"
                                    name="text"
                                />
                                <ErrorMessage className='error' name='text' component={'div'}/>
                                <button type="submit">Отправить</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}