import axios from 'axios';
import { CSSProperties } from 'react';

const serverURL = process.env.NODE_ENV === 'production' ? 'https://admin.kebikov.com' : 'http://localhost:3000';


const CheckConnectServer = () => {

    const onClick = async () => {

        // await axios
        //     .get(serverURL)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
        
        await axios.post(`${serverURL}/api/email/send/`, {})
            .then(res => {
                if(res.status === 200) {
                    console.log("res 400");
                    console.log(res.data);
                }
            })
            .catch(error => {
                if(axios.isAxiosError(error)) {
                    console.log("err 400", error.response?.data)
                }
            });

    }

    return(
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}} >
            <button
                style={style}
                onClick={onClick}
            >
                проверка сервера
            </button>
        </div>

    )
}

const style: CSSProperties = {
    background: 'var(--color-light-2__to__color-black-2)',
    fontSize: '24px',
    color: '#fff',
    padding: '10px'
}

export default CheckConnectServer;