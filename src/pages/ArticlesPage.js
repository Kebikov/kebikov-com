import Article from '../components/Article/Article';
import '../components/Article/article.scss';
import { articlesDB } from '../components/Article/articlesDB';
import { useEffect } from 'react';

const Articles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log('1',articlesDB.advicePh.link);
    });

    return(
        <>
            <div className="main-article-title">
                <div className="main-article-title__text">CТАТЬИ⋅СВАДЕБНОЙ⋅ТЕМАТИКИ</div>
            </div>
            <div className="article-all">
                <Article link={articlesDB.finalWeddings.link} title={articlesDB.finalWeddings.title} subtitle={articlesDB.finalWeddings.subtitle} picture={articlesDB.finalWeddings.picture}/>
                <Article link={articlesDB.bouquet.link} title={articlesDB.bouquet.title} subtitle={articlesDB.bouquet.subtitle} picture={articlesDB.bouquet.picture}/>
                <Article link={articlesDB.training.link} title={articlesDB.training.title} subtitle={articlesDB.training.subtitle} picture={articlesDB.training.picture}/>
                <Article link={articlesDB.advicePh.link} title={articlesDB.advicePh.title} subtitle={articlesDB.advicePh.subtitle} picture={articlesDB.advicePh.picture}/>
                <Article title={articlesDB.perfect.title} subtitle={articlesDB.perfect.subtitle} picture={articlesDB.perfect.picture}/>
                <Article link={articlesDB.fittings.link} title={articlesDB.fittings.title} subtitle={articlesDB.fittings.subtitle} picture={articlesDB.fittings.picture}/>
            </div>
        </>
    )
}

export default Articles;

