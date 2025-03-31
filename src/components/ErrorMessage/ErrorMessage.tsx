import { FC } from "react";


interface IErrorMessage {
    name: string;
    error: Record<string, string>;
}


const ErrorMessage: FC<IErrorMessage> = ({
    name,
    error
}) => {

    return(
        <>
            {
                error[name] ? <div className='error' >{error[name]}</div>
                :
                null
            }
        </>
    )
}

export default ErrorMessage;