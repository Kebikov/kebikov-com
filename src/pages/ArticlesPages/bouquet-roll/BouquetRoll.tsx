import '../beautiful-wedding-finale/beautifulWeddingFinale.scss';
import HederArticles from '../../../components/HederArticles/HederArticles';
import ArticleOption from '../../../components/ArticleOption/ArticleOption';
import FinaleBox from '../../../components/FinaleBox/FinaleBox';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { data } from './data';


const BouquetRoll = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    //* render 
    return(
        <>
            <Helmet>
                <title>8 Оригинальных Способов Бросить Букет Невесты.</title>
                <meta
                    name="description"
                    content="Оригинальные способы бросить букет невесты. 8 способов, чтобы не было как у всех. Подборка лучших идей как расстаться с букетом невесты."
                />
                <link rel="canonical" href="https://kebikov.com/articles/bouquet-roll"/>
            </Helmet>

            <HederArticles title={'8 ОРИГИНАЛЬНЫХ СПОСОБОВ БРОСИТЬ БУКЕТ НЕВЕСТЫ'}/>
            <div className="options">
                <ArticleOption text={'Самое долгожданное событие для каждой не женатой девушки на свадьбе — это бросание букета невесты.В классическом варианте, невеста становится спиной к не женатым подружкам и бросает его, не глядя через плечо. Сейчас я расскажу, как это сделать интересно и весело!'}/>
                {
                    data.map((item, i) => <FinaleBox title={item.title} text={item.text} img={item.img} side={i % 2 === 0} />)
                }
            </div>
        </>
    )
}

export default BouquetRoll;