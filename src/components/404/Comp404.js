import './comp.scss';
import monster from '../../resources/images/items/monsters404.png';

const Comp404 = () => {
    return(
        <div className="error-page">
            <div className="error-page__body">
                <img src={monster} alt="monster"/>
                <div className="error-page__text">Ой, такой страницы у меня нет.<br/> Error 404</div>
            </div>
        </div>
    )
}

export default Comp404;