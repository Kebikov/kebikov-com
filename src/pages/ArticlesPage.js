import Article from '../components/Article/Article';
import '../components/Article/article.scss';
import { articlesDB } from '../components/Article/articlesDB';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";

import { useDispatch } from 'react-redux';
import { setLineHeader } from '../redux/actions/actions';

const Articles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setLineHeader(true));
        return () => {
            dispatch(setLineHeader(false));
        }
    },[]);

    const dispatch = useDispatch();

    return(
        <>
            <Helmet>
                <title>Статьи свадебной тематики.</title>
                <meta
                    name="description"
                    content="Подборка статей, которые помогут вам лучше подготовится к свадебному дню.Статьи свадебной тематики покажут вам типичные ошибки молодожен."
                />
                <link rel="canonical" href="https://kebikov.com/articles"/>
            </Helmet>

            <div className="main-article-title">
                <div className="main-article-title__text">CТАТЬИ⋅СВАДЕБНОЙ⋅ТЕМАТИКИ</div>
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

