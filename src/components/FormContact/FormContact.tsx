import './formContact.scss';
import EmailAnime from '../emailAnime/EmailAnime';
import { useState } from 'react';
import { motion } from "framer-motion";
import { FC } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import CheckConnectServer from '../CheckConnectServer/CheckConnectServer';
import useOnSubmit from './hook/useOnSubmit';
import { motionButton, motionText } from './helpers/motionFormContact';
import type { IStateDataForm } from './hook/useOnSubmit';


interface IFormContact {
    color: string;
}


const FormContact: FC<IFormContact> = ({
    color
}) => {

    const [stateForm, setStateForm] = useState<IStateDataForm>({email: '', msg: '', check: undefined});
    const {message, error, onSubmit} = useOnSubmit(stateForm);

    const handelChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStateForm(state => ({...state, [evt.target.name]: evt.target.value}));
    }

    return(
        <>
            {/* <CheckConnectServer/> */}
            {
                message ? <EmailAnime message={message}/> 
                : null
            }
            <div className="contact">
                <div className="contact__body">
                    <div className="contact__body-after" style={{background: `linear-gradient(to top left, rgba(42,43,48,0) 50%, ${color} 50.5%)`}}/>
                    <div className="contact__body-before" style={{background: `linear-gradient(to top right, rgba(42,43,48,0) 50%, ${color} 50.5%)`}}/>
                    <motion.div
                        variants={motionText}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{once: true}}
                        className="contact__text">
                        Проверьте через e-mail, свободна ли ваша дата?!<br/>или позвоните<br/>+375 29 694 98 43 (Евгений)<br/>Вы можете написать в соц.сети.
                    </motion.div>
                        <form 
                            className="contact__form"
                            onSubmit={onSubmit}
                        >
                            <label htmlFor="email"  className='contact__label'>Ваша почта</label>
                            <input 
                                className='contact__email'
                                type='text'
                                name='email' 
                                id='email' 
                                placeholder='Email'
                                value={stateForm.email ? stateForm.email : ''}
                                onChange={handelChange}
                            />
                            <ErrorMessage name='email' error={error} />

                            <label htmlFor="msg" className='contact__label'>Ваше сообщение</label>
                            <textarea
                                className='contact__textarea'
                                id="msg"
                                name="msg"
                                placeholder='Сообшение...'
                                rows={3}
                                value={stateForm.msg ? stateForm.msg : ''}
                                onChange={handelChange}
                            />
                            <ErrorMessage name='msg' error={error} />
                            <input
                                id="check"
                                name="check"
                                className='contact__check'
                                placeholder='Введите ответ цифрой: два плюс три'
                                value={stateForm.check ? stateForm.check : ''}
                                onChange={handelChange}
                            />
                            <ErrorMessage name='check' error={error} />
                            <motion.button
                                variants={motionButton}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{once: true}}

                                type="submit" 
                                className='contact__button'>
                                Отправить
                            </motion.button>
                        </form>
                </div>
            </div>
        </>
    )
};

export default FormContact;