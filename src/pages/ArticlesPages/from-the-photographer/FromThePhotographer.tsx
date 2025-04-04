import '../beautiful-wedding-finale/beautifulWeddingFinale.scss';
import HederArticles from '../../../components/HederArticles/HederArticles';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import FinaleBox from '../../../components/FinaleBox/FinaleBox';
import { data } from './data';

const FromThePhotographer = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return(
        <>
            <Helmet>
                <title>6 Советов для Невест от Фотографа. Прочитайте !</title>
                <meta
                    name="description"
                    content="Советы для невест от свадебного фотографа. Прочтите семь простых советов, пусть день пройдет идеально. Все самое важное!"
                />
                <link rel="canonical" href="https://kebikov.com/articles/from-the-photographer"/>
            </Helmet>

            <HederArticles title={'6 советов для невест от фотографа'}/>
            {
                data.map((item, i) => <FinaleBox title={item.title} text={item.text} img={item.img} side={i % 2 === 0} />)
            }
        </>
    )
}

export default FromThePhotographer;