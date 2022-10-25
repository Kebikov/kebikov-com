import './article.scss';
import { Link } from 'react-router-dom';

const Article = ({title, subtitle, picture, link = null}) => {
    console.log('',link);

    return(
        <article className="article-all__item article">
            <div className="article__body">
                <div className="article__img">
                    <img src={picture} alt="свадьба"/>
                </div>
                <div className="article__title">{title}</div>
                <div className="article__subtitle">{subtitle}</div>
                <div className="article__button-body">
                    <Link to={link} className="article__button"><span>читать статью</span></Link>
                </div>
            </div>
        </article>
    )
}

export default Article;