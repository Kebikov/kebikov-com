/** `Обьект ошибки.` */
export interface IError {
     /** `Заголовок ошибки.` */
    error: string;
     /** `Описание ошибки.` */
    discription: string;
}

export type TErrorValidation = {
    [error in string]: string;
}