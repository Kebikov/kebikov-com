import './article.scss';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { IImageWedding } from '@/data/image/weddings/types';
import ImageWedding from '../ImageWedding/ImageWedding';
import { IArticlesDB } from '@/data/image/articles/articlesDB';

interface IArticle {
    article: IArticlesDB
}


const Article: FC<IArticle> = ({
    article
}) => {

    const {picture, title, top, subtitle, link} = article;

    return(
        <article className="article-all__item article">
            <div className="article__body">
                <div className="article__img" >
                    <ImageWedding item={picture} topPercent={top} />
                </div>
                <div className="article__title">{title}</div>
                <div className="article__subtitle">{subtitle}</div>
                <div className="article__button-body">
                    <Link to={link} className="article__button">читать статью</Link>
                </div>
            </div>
        </article>
    )
}

export default Article;