import './perfectWeddingPhotoSession.scss';
import { IImageWedding } from '@/data/image/weddings/types';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import HederArticles from '../../../components/HederArticles/HederArticles';
import ArticleOption from '../../../components/ArticleOption/ArticleOption';
import FinaleBox from '../../../components/FinaleBox/FinaleBox';
import { data } from './data';


export interface IDataForFinaleBox {
    title: string;
    text: string;
    img: [string, IImageWedding];
}


const PerfectWeddingPhotoSession = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return(
        <>
            <Helmet>
                <title>7 Советов для Идеальной Свадебной Фотосесии</title>
                <meta
                    name="description"
                    content="Прочитайте подборку советов и свадебная фотосессия пройдет как по нотам. Пары повторяют одни и те же ошибки, какие?"
                />
                <link rel="canonical" href="https://kebikov.com/articles/perfect-wedding-photo-session"/>
            </Helmet>

            <HederArticles title={'7 Советов для Идеальной Свадебной Фотосесии'}/>
            <div className="options">
                <ArticleOption text={'Прочитайте подборку советов, которые помогут вам при планировании и проведении свадебной фотосессии. Я отснял не один десяток пар и понял, как часто люди повторяют одни и те же ошибки. Которых с легкостью можно избежать избавившись от неприятных сюрпризов. Прочитайте и свадебная фотосессия пройдет как по нотам !'}/>
                {
                    data.map((item, i) => <FinaleBox title={item.title} text={item.text} img={item.img} side={i % 2 === 0} key={i} />)
                }
            </div>
        </>
    )
}

export default PerfectWeddingPhotoSession;