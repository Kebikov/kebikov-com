import './beautifulWeddingFinale.scss';
import HederArticles from '../../../components/HederArticles/HederArticles';
import ArticleOption from '../../../components/ArticleOption/ArticleOption';
import FinaleBox from '../../../components/FinaleBox/FinaleBox';
import { useEffect } from 'react';
import SEO from '../../../components/SEO/SEO';
import { data } from './data';


const BeautifulWeddingFinale = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return(
        <>
            <SEO
                url='https://kebikov.com/articles/beautiful-wedding-finale'
                title='15 Вариантов Красивого Свадебного Финала !'
                description='Завершение свадебного вечера, подборка 15 вариантов финала свадьбы, читайте чем завершить свадебный вечер, как зафиналить свадьбу ?'
                img='https://kebikov.com/opengraph/beautiful-wedding-finale.jpg'
            />

            <HederArticles title={'15 ВАРИАНТОВ КРАСИВОГО СВАДЕБНОГО ФИНАЛА'}/>
            <div className="options">
                <ArticleOption text={'Если вы читаете сейчас этот текст, значит перед вами дилемма, давайте разбираться. Я сейчас вам дам лишь вектор направления, что бы вы сориентировались какие варианты вообще есть, а выбор за вами. Расскажу вам, что сам видел, что нашел в сети интересного и как бы я это сделал сам.'}/>
                {
                    data.map((item, i) => <FinaleBox title={item.title} text={item.text} img={item.img} side={i % 2 === 0} key={i} />)
                }
            </div>
        </>
    )
}

export default BeautifulWeddingFinale;