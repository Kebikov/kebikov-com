import './hederArticles.scss';
import flov from '../../resources/images/items/Flov.png';

const HederArticles = ({title}) => {

    return(
            <div className="all-article-title">
                <div className="all-article-title__top"></div>
                <div className="all-article-title__body">
                    <div className="all-article-title__list">
                        <img src={flov} alt=""/>
                    </div>
                    <h1 className="all-article-title__text">{title}</h1>
                    <div className="all-article-title__list _list-bottom"><img src={flov} alt=""/></div>
                </div>
                <div className="all-article-title__bottom"></div>
            </div>
    )
}

export default HederArticles;