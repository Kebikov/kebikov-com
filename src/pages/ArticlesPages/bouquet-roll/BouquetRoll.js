import '../beautiful-wedding-finale/beautifulWeddingFinale.scss';
import HederArticles from '../../../components/HederArticles/HederArticles';
import ArticleOption from '../../../components/ArticleOption/ArticleOption';
import useArticle from '../../../hooks/useArticle';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import jpg1 from '../../../resources/images/articles/bouquet-roll/1.jpg';
import jpg2 from '../../../resources/images/articles/bouquet-roll/2.jpg';
import jpg3 from '../../../resources/images/articles/bouquet-roll/3.jpg';
import jpg4 from '../../../resources/images/articles/bouquet-roll/4.jpg';
import jpg5 from '../../../resources/images/articles/bouquet-roll/5.jpg';
import jpg6 from '../../../resources/images/articles/bouquet-roll/6.jpg';
import jpg7 from '../../../resources/images/articles/bouquet-roll/7.jpg';
import jpg8 from '../../../resources/images/articles/bouquet-roll/8.jpg';

import png1 from '../../../resources/images/articles/beautiful-wedding-finale/1.png';
import png2 from '../../../resources/images/articles/beautiful-wedding-finale/2.png';
import png3 from '../../../resources/images/articles/beautiful-wedding-finale/3.png';
import png4 from '../../../resources/images/articles/beautiful-wedding-finale/4.png';
import png5 from '../../../resources/images/articles/beautiful-wedding-finale/5.png';
import png6 from '../../../resources/images/articles/beautiful-wedding-finale/6.png';
import png7 from '../../../resources/images/articles/beautiful-wedding-finale/7.png';
import png8 from '../../../resources/images/articles/beautiful-wedding-finale/8.png';

const finaleDB = [
    {
        title: 'Юла',
        text: 'Как оказалось, тот вариант, что мы считаем классикой, отличается от оригинала. В традиционном понимании, невеста становится спиной к подружкам и начинает кружится, делая три оборота по часовой стрелке с закрытыми глазами и после кидает букет. Девушка поймавшая букет, выбирает самый красивый цветок и оставляет себе. Сам же букет остается у невесты, считается что так невеста делится своим счастьем с подружкой. Невеста может свой букет засушить и оставить на память о радостном дне.',
        img: [png1, jpg1]
    },
    {
        title: 'Свадебная рулетка',
        text: 'Суть в чем, подружки становятся в круг, с невестой в центре. Все начинают кружится, невеста с закрытыми глазами по часовой, а хоровод подружек против часовой стрелки. И посчитав до 10, невеста протягивает букет, получается как рулетка в казино.',
        img: [png2, jpg2]
    },
    {
        title: 'Всем поровну',
        text: 'Все не замужние подружки, выходят в центр банкетного зала. Невеста распускает свадебный букет и дарит каждой подружке по цветку, даря всем частичку своего счастья. В этом варианте останутся довольны все.',
        img: [png3, jpg3]
    },
    {
        title: 'Испытание временем',
        text: 'Накануне свадьбы, напишите на подошве свадебных туфель, имена не замужних подруг. В течении дня, часть имен сотрется вовсе, а от некоторых останется лишь часть. Посмотрите в конце дня, какое имя лучше всего сохранилось. Вот вам и победитель, кому дарить букет.',
        img:  [png4, jpg4]
    },
    {
        title: 'Счастливое пирожное',
        text: 'Надо еще при заказе свадебного торта, заказать пирожные, в количестве равным не замужним подругам. И в одно из пирожных положить колечко. На банкете попросить подружек выйти в цент банкетного зала и взять по одному пирожному, как вы поняли кто найдет колечко, той и достанется букет.',
        img: [png5, jpg5]
    },
    {
        title: 'Ленточка',
        text: 'К букету невесты привязывается ленточка длинной 1.8-2.5 метра, остальные ленточки просто зажимаются рукой к букету, так чтобы не было понятно какая именно лента привязана к букету. Общее количество ленточек должно быть равно количеству не замужних подруг. Каждая не замужняя девушка берет по одному концу ленты и по сигналу тянет на себя, счастливица с привязанной ленточкой получает букет невесты.',
        img: [png6, jpg6]
    },
    {
        title: 'Замочек',
        text: 'Надо заранее найти сундучок или ларец, для эффектности обмотать цепями и повесить замок. Более простой вариант, прикрепить к букету невесты замочек. Разложить перед подружками ключи, пусть сами решают какой нравится больше, кто замочек откроет той и достанется букет.',
        img: [png7, jpg7]
    },
    {
        title: 'Свадебный квест',
        text: 'Продумайте с ведущим конкурсы и задания, при выполнении которых подружки будут собирать очки. Это придаст дополнительную мотивацию для активного участия в конкурсах. Набравшая больше всего балов получит «супер приз»- букет невесты.',
        img: [png8, jpg8]
    }
]


//= BouquetRoll 
const BouquetRoll = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const {FinaleBox} = useArticle();

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
                <ArticleOption text={'Самое долгожданное событие для каждой не женатой девушки на свадьбе — это бросание букета невесты. В классическом варианте, невеста становится спиной к не женатым подружкам и бросает его, не глядя через плечо. Сейчас я расскажу, как это сделать интересно и весело!'}/>
                <FinaleBox info={finaleDB[0]} side={true}/>
                <FinaleBox info={finaleDB[1]} side={false}/>
                <FinaleBox info={finaleDB[2]} side={true}/>
                <FinaleBox info={finaleDB[3]} side={false}/>
                <FinaleBox info={finaleDB[4]} side={true}/>
                <FinaleBox info={finaleDB[5]} side={false}/>
                <FinaleBox info={finaleDB[6]} side={true}/>
                <FinaleBox info={finaleDB[7]} side={false}/>
            </div>
        </>
    )
}

export default BouquetRoll;