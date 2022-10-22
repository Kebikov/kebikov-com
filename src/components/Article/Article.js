import './article.scss';

const Article = ({title, subtitle, picture}) => {

    return(
        <article className="article-all__item article">
            <div className="article__body">
                <div className="article__img">
                    <img src={picture} alt="свадьба"/>
                </div>
                <div className="article__title">{title}</div>
                <div className="article__subtitle">{subtitle}</div>
                <div className="article__button-body">
                    <a className="article__button" href="15-variantov-krasivogo-svadebnogo-finala.html"><span>читать статью</span></a>
                </div>
            </div>
        </article>
    )
}

export default Article;