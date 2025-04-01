import { useState } from "react";
import { object, number, string, ObjectSchema, ValidationError } from 'yup';
import { sendEmail } from "../helpers/sendEmail";
import type { TErrorValidation } from '@/server/types';
import type { IReqPostEmailSend } from '@/server/types/email';


export interface IStateDataForm extends IReqPostEmailSend {
    check: number | undefined
}




const useOnSubmit = (
    stateForm: IStateDataForm, 
    setStateForm: React.Dispatch<React.SetStateAction<IStateDataForm>>
) => {
    /** 
      * @param message Сообщение при отпавке данных формы.
      */
    const [message, setMessage] = useState('');
    /** 
      * `Ошибка при валидации данных формы.`
      */
    const [error, setError] = useState<TErrorValidation>({});

    let validationSchema: ObjectSchema<IStateDataForm> = object({
        check: number().oneOf([5], 'Не правильный ответ.').required('Ответ обязателен для отправки.'),
        msg: string().required("Сообщение обязательно для отправки."),
        email: string().email("Неверный формат email").required("Email обязателен")
    });

    const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setError({});
        
        await validationSchema.validate(stateForm, {abortEarly: false})
            .then(async () => {
                await sendEmail(stateForm, setStateForm, setMessage, setError);
            })
            .catch((error) => {
                if(error instanceof ValidationError) {
                    const objectErrors: Record<string, string> = {};
                    error.inner.forEach(err => {
                        if(err.path) objectErrors[err.path] = err.message;
                    });
                    setError(objectErrors);
                }
            });
        
    }

    return {
        onSubmit, 
        message,
        error
    }
}

export default useOnSubmit;