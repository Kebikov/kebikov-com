import axios from 'axios';
import type { IStateDataForm } from '../hook/useOnSubmit';
import type { TErrorValidation } from '@/server/types';

const serverURL = process.env.NODE_ENV === 'production' ? 'https://admin.kebikov.com' : 'http://localhost:3000';


export const sendEmail = async (
    stateForm: IStateDataForm, 
    setStateForm: React.Dispatch<React.SetStateAction<IStateDataForm>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<TErrorValidation>>
) => {

    setMessage('отправка письма...');

    await axios.create({timeout: 5000})
        .post(`${serverURL}/api/email/send/`, 
            {
                email: stateForm.email, 
                msg: stateForm.msg, 
                check: stateForm.check
            })
        .then(res => {
            if(res.status === 200){
                setMessage('Спасибо, письмо отправлено !');
                setTimeout(() => {
                    setStateForm({email: '', msg: '', check: undefined});
                    setMessage('');
                }, 1000);
            }
        })
        .catch(error => {
            console.log('Error sendEmail');
            if(axios.isAxiosError(error) && error.status === 400 && error.response?.data) {
                setError(error.response.data);
                setMessage('');
            } else {
                setMessage('Извините, произошла ошибка !');
                setTimeout(() => {
                    setMessage('');
                }, 3000);
            }                   
            
        });

}