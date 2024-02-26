import './beautifulWeddingFinale.scss';
import HederArticles from '../../../components/HederArticles/HederArticles';
import ArticleOption from '../../../components/ArticleOption/ArticleOption';
import useArticle from '../../../hooks/useArticle';
import { useEffect } from 'react';
import SEO from '../../../components/SEO/SEO';
import jpg1 from '../../../resources/images/articles/beautiful-wedding-finale/1.jpg';
import jpg2 from '../../../resources/images/articles/beautiful-wedding-finale/2.jpg';
import jpg3 from '../../../resources/images/articles/beautiful-wedding-finale/3.jpg';
import jpg4 from '../../../resources/images/articles/beautiful-wedding-finale/4.jpg';
import jpg5 from '../../../resources/images/articles/beautiful-wedding-finale/5.jpg';
import jpg6 from '../../../resources/images/articles/beautiful-wedding-finale/6.jpg';
import jpg7 from '../../../resources/images/articles/beautiful-wedding-finale/7.jpg';
import jpg8 from '../../../resources/images/articles/beautiful-wedding-finale/8.jpg';
import jpg9 from '../../../resources/images/articles/beautiful-wedding-finale/9.jpg';
import jpg10 from '../../../resources/images/articles/beautiful-wedding-finale/10.jpg';
import jpg11 from '../../../resources/images/articles/beautiful-wedding-finale/11.jpg';
import jpg12 from '../../../resources/images/articles/beautiful-wedding-finale/12.jpg';
import jpg13 from '../../../resources/images/articles/beautiful-wedding-finale/13.jpg';
import jpg14 from '../../../resources/images/articles/beautiful-wedding-finale/14.jpg';
import jpg15 from '../../../resources/images/articles/beautiful-wedding-finale/15.jpg';
import png1 from '../../../resources/images/articles/beautiful-wedding-finale/1.png';
import png2 from '../../../resources/images/articles/beautiful-wedding-finale/2.png';
import png3 from '../../../resources/images/articles/beautiful-wedding-finale/3.png';
import png4 from '../../../resources/images/articles/beautiful-wedding-finale/4.png';
import png5 from '../../../resources/images/articles/beautiful-wedding-finale/5.png';
import png6 from '../../../resources/images/articles/beautiful-wedding-finale/6.png';
import png7 from '../../../resources/images/articles/beautiful-wedding-finale/7.png';
import png8 from '../../../resources/images/articles/beautiful-wedding-finale/8.png';
import png9 from '../../../resources/images/articles/beautiful-wedding-finale/9.png';
import png10 from '../../../resources/images/articles/beautiful-wedding-finale/10.png';
import png11 from '../../../resources/images/articles/beautiful-wedding-finale/11.png';
import png12 from '../../../resources/images/articles/beautiful-wedding-finale/12.png';
import png13 from '../../../resources/images/articles/beautiful-wedding-finale/13.png';
import png14 from '../../../resources/images/articles/beautiful-wedding-finale/14.png';
import png15 from '../../../resources/images/articles/beautiful-wedding-finale/15.png';


const finaleDB = [
    {
        title: 'Замочек',
        text: 'Надо заранее найти сундучок или ларец, для эффектности обмотать цепями и повесить замок. Более простой вариант, прикрепить к букету невесты замочек. Разложить перед подружками ключи, пусть сами решают какой нравится больше, кто замочек откроет той и достанется букет.',
        img: [png1, jpg1]
    },
    {
        title: 'Танец отца и дочери',
        text: 'Еще одна свадебная традиция которая станет хорошим финалом свадебного вечера. Очень трогательный и слезливая концовка, которую частенько дополняют танцем жениха и его матери.\n\nВы скажите все банально, но это отличный финал свадебного вечера. Идем дальше.',
        img: [png2, jpg2]
    },
    {
        title: 'Шарики',
        text: 'Воздушные шары со светодиодами внутри, в ночное время смотрится просто класс.Я видел три разных способа запуска шаров.\n\nПервый-всем гостям раздают по шарику и по команде происходит запуск.\n\nВторой- шарики заранее прячутся под сетку или любую ткань, молодые обрезают ленточку сдерживавшею полет шаров и одновременно десятки светящихся шариков улетают в небо.\n\nТретий вариант- шарики заранее компонуют в виде большого сердца, которое молодожены совместно запускают.\n\nСтоит понимать, что на фото диодов внутри видно не будет, слишком большая разница в экспозиции освещённости диодов внутри шариков и адекватным освящением людей.',
        img: [png3, jpg3]
    },
    {
        title: 'Китайские фонарики',
        text: 'Еще одна свадебная традиция которая станет хорошим финалом свадебного вечера. Очень трогательный и слезливая концовка, которую частенько дополняют танцем жениха и его матери.\n\nВы скажите все банально, но это отличный финал свадебного вечера. Идем дальше.',
        img:  [png4, jpg4]
    },
    {
        title: 'Светящиеся палочки',
        text: 'Если варианты с огнем вам не подходят отличной альтернативой будут неоновые палочки. Многие из нас их видели, но не знали, что с их помощью можно отлично зафиналить свадебный вечер. Все что надо, это раздать их гостям.\n\nПусть гости станут рядами или за молодыми и помахают палочками, а фотограф снимая на длинной выдержке получить необычные кадра. При движении палочки будут создавать необычные фигуры.\n\nПалочки легко гнутся и гости смогут сделать себе из них обручи, браслеты, очки, это дополнительно подчеркнет атмосферу веселья.',
        img: [png5, jpg5]
    },
    {
        title: 'Фаер шоу',
        text: 'Фаер шоу удовольствие не из дешёвых, для финала свадебного вечера. Масштаб шоу определяете только вы своим кошельком, от пары артистов до большой группы мастеров огненного танца. По желанию шоу сопровождается пиротехническими спецэффектами, что будет способствовать еще большей зрелищности.\n\nСтоит учесть, что места для подобной концовки свадебного вечера надо много, из соображений безопасности между артистами и гостями должно быть достаточно места.\n\nОпять же не забываем уточнить есть ли возможность у банкетной площадки предоставить место.',
        img: [png6, jpg6]
    },
    {
        title: 'Торт',
        text: 'Самая распространённая концовка свадебного вечера. Торт есть на любой свадьбе, и все гости с нетерпением ждут этого сладкого момента. Хорошей альтернативой торту будут капкейки, ничего резать не надо и смотрится отлично.\n\nПозаботьтесь заранее о холодильной камере для торта, она должна быть достаточного размере. И еще заказывайте торт с доставкой, обычно доставка осуществляется на автомобиле с холодильной камерой, а значит торт приедет к вам целый и невредимый.',
        img: [png7, jpg7]
    },
    {
        title: 'Салют',
        text: 'Эффектно-да, красиво-да, дорого-да. Салют стал уже классическим финалом. Все приглашённые будут восторге от разноцветных взрывов в ночном небе. Стартовая цена небольшого салюта продолжительностью в 2 минуты 350 $, максимальный придел ограничен только вашим кошельком и здравым смыслом.При выборе места для салюта привлеките к процессу фотографа, это поможет вам получить не только красивое шоу, но эффектные кадры.',
        img: [png8, jpg8]
    },
    {
        title: 'Холодные фонтаны',
        text: 'Температура, с которой горят фонтаны, не более 70 градусов, отсюда и название. Искры, летящие на высоту более 2-х метров гарантируют WOW эффект. Подобные фонтаны можно разжигать даже в помещениях, ограничение только в виде высоких потолков, они должны быть не менее 5 метров.\n\nРасставьте фонтаны вдоль дороги по которой пара покинет праздничный вечер, и вы получите сказочный финал свадебного вечера. Также очень эффектно смотреться танец молодожен на фоне горящих фонтанов.',
        img: [png9, jpg9]
    },
    {
        title: 'Кораблики или венки',
        text: 'Этот финал идеально подходит для площадок, находящихся рядом с водоемами. Раньше это была детская забава, пускать кораблики по течению, многие верят, что запушённый по реке бумажный кораблик исполнит любое желание.\n\nВ темноте кораблики и венки плохо видны, поэтому рекомендую поместить внутрь свечи или светодиоды, это добавит +500 к атмосфере праздничного дня.',
        img: [png10, jpg10]
    },
    {
        title: 'Бенгальские огни',
        text: 'Простой, но в то же время эффектный финал. Чаще всего бенгальские огни зажигают в новый год под бой курантов, а в нашем случае они помогут красиво закончить свадебный вечер. Раздайте гостям хотя бы по одной штуке, попросите гостей стать друг напротив друга, создав тем самым коридор по которому пройдут новоиспеченные муж и жена. Красивые фото получаться 100%\n\nСтоят они не дорого и доступны для любого бюджета. Покупать стоит бенгальские огни больших размеров, маленькие слишком быстро горят и дают небольшой пучок искр. Позаботьтесь заранее о зажигалках и спичках для гостей, что бы у гостей была возможность одновременно зажечь огни.\n\nЖених может пронести невесту на руках или просто пройтись по коридору из бенгальских огней, в конце завершив действо романтическим поцелуем.',
        img: [png11, jpg11]
    },
    {
        title: 'Свечи',
        text: 'Еще один интересный способ зафиналить вечер, это свечи. Ночь плюс свечи, романтика обеспечена. Чем больше свечей, тем лучше. Что бы гости не обожгли руки, а ветер не стал помехой вашим планам, необходимо поместить свечи в стеклянные подсвечники.',
        img: [png12, jpg12]
    },
    {
        title: 'Телефон',
        text: 'Это вариант финала свадебного вечера без затрат. Попросите гостей образовать коридор и включить фонарики на своих телефонах. Смотреться просто и эффектно. А сэкономленные деньги можно отдать фотографу)',
        img: [png13, jpg13]
    },
    {
        title: 'Танец',
        text: `Если у пары заготовлен свадебный танец, то лучше его перенести в конец свадебного вечера. Танец можно совместить практически с любым финалом. Когда я первый раз увидел, как романтично и эффектно смотрится свадебный танец ночью, я был поражен и удивлён почему все не делают его в конце, это же так просто и красиво.`,
        img: [png14, jpg14]
    },
    {
        title: 'Благодарственные слова',
        text: 'Уверен вам есть что сказать в конце вечера, родителям, гостям и не забывайте про подрядчиков, нам это приятно. Речь можно даже не готовить, просто скажите, что считаете нужным, заученный текст не вызывает таких эмоции. Заранее накидайте небольшой план своей речи и все.\n\nНадеюсь вам была полезна эта подборка и мой труд не прошел даром. Спасибо, что дочитали до конца, пока)',
        img: [png15, jpg15]
    }
]

//= BeautifulWeddingFinale 
const BeautifulWeddingFinale = () => {
    //* hooks 
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const {FinaleBox} = useArticle();

    //* render 
    return(
        <>
            <SEO
                url='https://kebikov.com/articles/beautiful-wedding-finale'
                title='15 Вариантов Красивого Свадебного Финала !'
                description='Завершение свадебного вечера, подборка 15 вариантов финала свадьбы, читайте чем завершить свадебный вечер, как зафиналить свадьбу ?'
                img='https://kebikov.com/opengraph/beautiful-wedding-finale.jpg'
            />

            <HederArticles title={'15 ВАРИАНТОВ КРАСИВОГО СВАДЕБНОГО ФИНАЛА'}/>
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
                <FinaleBox info={finaleDB[8]} side={true}/>
                <FinaleBox info={finaleDB[9]} side={false}/>
                <FinaleBox info={finaleDB[10]} side={true}/>
                <FinaleBox info={finaleDB[11]} side={false}/>
                <FinaleBox info={finaleDB[12]} side={true}/>
                <FinaleBox info={finaleDB[13]} side={false}/>
                <FinaleBox info={finaleDB[14]} side={true}/>
            </div>
        </>
    )
}

export default BeautifulWeddingFinale;