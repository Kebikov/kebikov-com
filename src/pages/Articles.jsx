import Article from '../components/Article/Article';
import '../components/Article/article.scss';
import { articlesDB } from '../components/Article/articlesDB';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import SEO from '../components/SEO/SEO';
import { useDispatch } from 'react-redux';
import { setLineHeader } from '../redux/slice/indexSlice';

const Articles = () => {
    console.log('Articles');

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setLineHeader(true));
        return () => {
            dispatch(setLineHeader(false));
        }
    },[]);

    return(
        <>
            <SEO
                url='https://kebikov.com/articles'
                title='Статьи свадебной тематики.'
                description='Подборка статей, которые помогут вам лучше подготовится к свадебному дню.Статьи свадебной тематики покажут вам типичные ошибки молодожен.'
            />

            <div className="main-article-title">
                <h1 className="main-article-title__text">CТАТЬИ⋅СВАДЕБНОЙ⋅ТЕМАТИКИ</h1>
            </div>
            <div className="article-all">
                <Article link={articlesDB.finalWeddings.link} title={articlesDB.finalWeddings.title} subtitle={articlesDB.finalWeddings.subtitle} picture={articlesDB.finalWeddings.picture}/>
                <Article link={articlesDB.bouquet.link} title={articlesDB.bouquet.title} subtitle={articlesDB.bouquet.subtitle} picture={articlesDB.bouquet.picture}/>
                <Article link={articlesDB.training.link} title={articlesDB.training.title} subtitle={articlesDB.training.subtitle} picture={articlesDB.training.picture}/>
                <Article link={articlesDB.advicePh.link} title={articlesDB.advicePh.title} subtitle={articlesDB.advicePh.subtitle} picture={articlesDB.advicePh.picture}/>
                <Article link={articlesDB.perfect.link} title={articlesDB.perfect.title} subtitle={articlesDB.perfect.subtitle} picture={articlesDB.perfect.picture}/>
                <Article link={articlesDB.fittings.link} title={articlesDB.fittings.title} subtitle={articlesDB.fittings.subtitle} picture={articlesDB.fittings.picture}/>
            </div>
        </>
    )
}

export default Articles;

