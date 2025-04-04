import './preparationsWedding.scss';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import HederArticles from '../../../components/HederArticles/HederArticles';
import { data } from './data';


const PreparationsWedding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const items = data.map(item => {
        const { title, text, img } = item;

        return(
                <div className="start" key={title}>
                    <div className="start__icon">
                        <img src={img} alt="#"/>
                    </div>
                    <div className="start__title">{title}</div>
                    <div className="start__text">{text}</div>
                </div>
        )
    })

    return(
        <>
            <Helmet>
                <title>C Чего Начать Подготовку к Свадьбе? 10 Шагов Подготовки !</title>
                <meta
                    name="description"
                    content="Как и с чего начать подготовку к свадебному дню ? Прочитайте и узнаете все подробности! 10 простых шагов, все четко и по пунктам."
                />
                <link rel="canonical" href="https://kebikov.com/articles/preparations-wedding"/>
            </Helmet>
            <HederArticles title={'C ЧЕГО НАЧАТЬ ПОДГОТОВКУ К СВАДЬБЕ?'}/>
            {items}
        </>
    )
}

export default PreparationsWedding;