import './preparationsWedding.scss';
import { useEffect } from 'react';
import HederArticles from '../../../components/HederArticles/HederArticles';
import png1 from '../../../resources/images/articles/preparations-wedding/1.png';
import png2 from '../../../resources/images/articles/preparations-wedding/2.png';
import png3 from '../../../resources/images/articles/preparations-wedding/3.png';
import png4 from '../../../resources/images/articles/preparations-wedding/4.png';
import png5 from '../../../resources/images/articles/preparations-wedding/5.png';
import png6 from '../../../resources/images/articles/preparations-wedding/6.png';
import png7 from '../../../resources/images/articles/preparations-wedding/7.png';
import png8 from '../../../resources/images/articles/preparations-wedding/8.png';
import png9 from '../../../resources/images/articles/preparations-wedding/9.png';
import png10 from '../../../resources/images/articles/preparations-wedding/10.png';

const preparationsDB = [
    {
        title: 'Банкетная площадка для свадьбы',
        text: 'От этого зависит: количество человек на свадьбе, стилистика свадьбы, цветовые решения свадьбы. Конечно не подойдёт для свадьбы в бордовый цветах, зал с оранжевыми стенами. Обязательно заключаем договор, не стесняемся, что бы вам не говорили, с обязательным указанием цены, даты и т.д. Если договора у них нет, не поленитесь, скачайте с интернета шаблон договора для банкетного зала, пропишите те пункты, которые для вас важны.\n\nВозьмите блокнот и все то что вам озвучивает менеджер записывайте в блокнот. Сказали, что можно алкоголя не ограничено принести, запишите, оговорили сумму счета на человека, запишите. В дальнейшем при заключении договора, вы сможете сверить устные договоренности, записанные в блокноте, с конечным договором и если что-либо не так, то дополнительно прописать в договоре. Если с вами не хотят заключать договор, то значит что-то не то. Потому что, если ту даже придет свадебное агентство, то они в любом случае с ними заключат договор, по-другому агентства не работают. Застрахуйте себя от форс-мажора ! Ведь без договора вам могут включить в конечный счет все что угодно, скажут, что мы вам говорили, а вы не услышали, а у нас розетки платные)\n\nВ основном, вносится залог арендной стоимости банкетной площадки. Желательно внести деньги через безналичный расчет, взять реквизиты и оплатить через банк. В этом случае у вас больше гарантий, чем при оплате наличными на месте, мало ли скажут, что вы ничего не оплачивали. И еще, уточните есть ли холодильник достаточных размеров, для разрешения в дальнейшем свадебного торта, это важно, если вы хотите сохранить его в первозданном виде.',
        img: png1
    },
    {
        title: 'Жилье для гостей',
        text: 'Продумайте где будут жить ваши гости, в идеале выбирать банкетный зал для свадьбы так, чтобы рядом можно было разместить гостей, так вы снимете проблему с транспортом для доставки гостей к месту жилья. Так же все с договором.',
        img: png2
    },
    {
        title: 'Выбор подрядчиков для свадьбы',
        text: 'Не отлаживайте на последний момент выбор ведущего, фотографа, оператора и различных артистов на последний момент. Бронируйте подрядчиков сразу как определились с местом проведения банкета. Отнеситесь к этому шагу ответственно ведь от этих людей зависят ваши воспоминания о свадебном дне. Особенно трудно мне кажется выбрать ведущего на свадьбу, ведь конечный результат его работы трудно увидеть заранее, в отличии от фотографа и оператора.\n\nТак что, я бы рекомендовал сначала забронировать фотографа и оператора, посоветоваться с ними по поводу подбора ведущего. Ведь они были не на одном десятке свадеб и значит есть с чем сравнить. Поверьте, им важно, чтобы был хороший ведущий на свадьбе. Ведь если будет слабый ведущий, то и сама свадьба пройдет скучно и не эмоционально, а значит фотографу и оператору работать сложней. Про выбор фотографа можно прочитать тут, думаю эту статью можно применить и к оператору. Не забываем про договора и предоплату.',
        img: png3
    },
    {
        title: 'Оформление свадьбы',
        text: 'Так как вы уже выбрали ресторан и значит уже определились со стилистикой свадьбы, надо искать оформителей, расскажите о своих предпочтениях и что вы хотите. Подумайте в какой форме вы хотите пригласить гостей на свадьбу: обзвонить всех по телефону, послать пригласительные, сделать сайт с приглашением на свадьбу, вариантов много, ваш выбор и концепцию тоже надо обсудить с оформителями, чтобы все было в одном стиле.',
        img: png4
    },
    {
        title: 'Транспорт для свадьбы',
        text: 'Подумайте на чем вы будете передвигаться в свадебный день, что нравится то и берите, единственное, на лимузине вы будите передвигаться гораздо медленнее, это надо учитывать.',
        img: png5
    },
    {
        title: 'Свадебный танец',
        text: 'Если вы хотите сделать красивый первый танец, то примерно за два месяца до свадьбы вам надо начинать заниматься с хореографом. Примерно 5-7 занятий вам понадобится для полноценного танца. Совет: записывайте на видео свои тренировки, это позволит вам посмотреть на себя со стороны и лучше увидеть плюсы и минусы танца, а также позволит репетировать танец дома. Танец следует выбирать исходя из стилистики свадьбы и размеров танцевальной зоны на банкете. Учитывать надо свадебное платье и туфли. Ведь если у вас пышное платье не каждый танец вам подойдёт. Совет: репетируйте в свадебных туфлях, это позволит не только разносить обувь и избежать неудобств в свадебный день, но и лучше понять на что вы способны во время танца.',
        img: png6
    },
    {
        title: 'Свадебный торт',
        text: 'Если вы хотите сделать красивый первый танец, то примерно за два месяца до свадьбы вам надо начинать заниматься с хореографом. Примерно 5-7 занятий вам понадобится для полноценного танца. Совет: записывайте на видео свои тренировки, это позволит вам посмотреть на себя со стороны и лучше увидеть плюсы и минусы танца, а также позволит репетировать танец дома. Танец следует выбирать исходя из стилистики свадьбы и размеров танцевальной зоны на банкете. Учитывать надо свадебное платье и туфли. Ведь если у вас пышное платье не каждый танец вам подойдёт. Совет: репетируйте в свадебных туфлях, это позволит не только разносить обувь и избежать неудобств в свадебный день, но и лучше понять на что вы способны во время танца.',
        img: png7
    },
    {
        title: 'Свадебное платье, костюм, кольца',
        text: 'Платье лучше покупать или бронировать для аренды за два месяца до свадьбы. Купите раньше, оно вам может разонравится или просто поменяются вкус. Так же не забывайте о колебании веса, от свадебной суматохи вы можете потерять лишний вес и платье придется править под вас по новой. В случае, если невеста в положении, платье надо выбирать не ранее трех недель до свадьбы, в этот период, формы стремительно меняются. С костюмом жениха и кольцами, все проще, особых сроков нет.',
        img: png8
    },
    {
        title: 'Прическа,макияж на свадьбу',
        text: 'Репетицию свадебного образа лучше делать за 3-4 недели до свадьбы. Для начала уделите время и определитесь, посмотрев в интернете, что вам нравится, какой макияж и причёску вы хотите. Сохраните понравившиеся фото макияжа и прически, чтобы показать мастерам. Конечно пробный макияж и прическа не бесплатна, обидно такой красоте пропадать. Вы можете запланировать на этот день фотосъемку Love Story. В свадебный день показав фотографии гостям, через проектор в виде слайд шоу или в распечатанном виде.',
        img: png9
    },
    {
        title: 'Свадебные мелочи',
        text: 'Это: различные аксессуары для свадебной прогулки, подарки для гостей (которые будет дарит ведущий во время конкурсов). Подготовка продуктов и напитков для гостей, которые будут с вами во время прогулки.\n\nКонечно эта статья не раскрывает все аспекты и мелочи свадебного дня. Я старался искренне помочь вам с организацией свадебного дня, чтобы осталось как можно меньше подводных камней, с которыми вы можете столкнутся. Надеюсь вам она была полезна.',
        img: png10
    }
]

const PreparationsWedding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const items = preparationsDB.map(item => {
        const { title, text, img } = item;

        return(
                <div className="start" key={title}>
                    <div className="start__icon">
                        <img src={img} alt=""/>
                    </div>
                    <div className="start__title">{title}</div>
                    <div className="start__text">{text}</div>
                </div>
        )
    })

    return(
        <>
            <HederArticles title={'C ЧЕГО НАЧАТЬ ПОДГОТОВКУ К СВАДЬБЕ?'}/>
            {items}
        </>
    )
}

export default PreparationsWedding;