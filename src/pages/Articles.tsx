import './scss/articles.scss';
import Article from '../components/Article/Article';
import { articlesDB } from '../data/image/articles/articlesDB';
import { useEffect } from 'react';
import SEO from '../components/SEO/SEO';
import { useDispatch } from 'react-redux';
import { setLineHeader } from '../redux/slice/indexSlice';

const Articles = () => {

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
                {
                    articlesDB.map((item, i) => <Article article={item} key={i} />)
                }
            </div>
        </>
    )
}

export default Articles;

