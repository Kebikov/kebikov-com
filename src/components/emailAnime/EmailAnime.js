import './emailAnime.scss';
import picEmail from '../../resources/images/contact/email.png';

const EmailAnime = ({message}) => {

    return(
        <div className="anime-meil">
            <div className="anime-meil__body">
                <div className="anime-meil__box">
                    <div className="anime-meil__meil">
                        <img src={picEmail} alt="письмо"/>
                    </div>
                    <div className="anime-meil__text">{message}</div>
                </div>
            </div>
        </div>
    )
}

export default EmailAnime;