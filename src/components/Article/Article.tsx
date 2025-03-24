import './article.scss';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { IImageWedding } from '@/data/image/weddings/types';
import ImageWedding from '../ImageWedding/ImageWedding';


interface IArticle {
    title: string; 
    subtitle: string;
    picture: IImageWedding;
    link: string;
}


const Article: FC<IArticle> = ({
    title, 
    subtitle, 
    picture, 
    link
}) => {

    return(
        <article className="article-all__item article">
            <div className="article__body">
                <div className="article__img">
                    <ImageWedding item={picture} />
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