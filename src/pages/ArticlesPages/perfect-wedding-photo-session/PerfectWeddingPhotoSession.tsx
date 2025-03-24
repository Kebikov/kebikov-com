import './perfectWeddingPhotoSession.scss';
import { IImageWedding } from '@/data/image/weddings/types';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import HederArticles from '../../../components/HederArticles/HederArticles';
import ArticleOption from '../../../components/ArticleOption/ArticleOption';
import FinaleBox from '../../../components/FinaleBox/FinaleBox';
import { IMG_numbers as num } from '@/data/image/numbers';
import { IMG_perfect_wedding_photo_session as images } from '@/data/image/articles/perfect-wedding-photo-session';


export interface IFinaleDB {
    title: string;
    text: string;
    img: [string, IImageWedding];
}


const finaleDB: IFinaleDB[] = [
    {
        title: 'Сколько длится свадебная фотосессия?',
        text: 'Начну с того, что редко свадебный день проходит строго по плану. В расчет не берутся многие моменты из которых складываются часы не учтенного времени. В идеале свадебная фотосессия длится три часа. Примерно один час уходит на дорогу и смену локаций и два часа на саму съемку.\n\n На практике, лучшие кадры приносит именно второй час съемки, свадебный фотограф входит в творческую колею. Вам надо время привыкнуть камере и расслабится. В итоге три часа съемки- это золотая середина, вы не устанете от съемки, а фотограф получит нужные кадры.',
        img: [num[1], images[0]]
    },
    {
        title: 'Гости на прогулке.',
        text: 'Выбирая места для съемок, подумайте заранее, чем будут заняты гости во время съемки. Ведь свадебная фотосессия длится не один час и это время будет длится вечно, если не занять их чем либо. Присмотрев место для съемки, сразу подумайте где оставить гостей и чем их занять, это сэкономит время и нервы в свадебный день.',
        img: [num[2], images[1]]
    },
    {
        title: 'А можно с вами ?',
        text: 'Свадебная фотосессия должна проходить в стиле минимализма гостей. На прогулке должны быть: молодожёны, свидетели, свадебный фотограф, если есть оператор и все! Конечно гости не будут стоять в сторонке и мирно наблюдать, всем надо сделать снимки на свой фотоаппарат. Как же без дельного совета, не только молодожёнам,но и фотографу и оператору.\n\n Это только кажется, что времени много, вы и не заметите как пройдет съемка. Гости будут только отвлекать вас и не дадут расслабится. Так что, возьмите с собой только свидетелей .',
        img: [num[3], images[2]]
    },
    {
        title: 'Что взять ?',
        text: 'Питьевая вода 1.5 литра, запасная рубашка, балетки или любая удобная обувь, зонт, булавки, все это должно быть с вами, что бы свадебная фотосессия прошла как по нотам ! Через час на жаре вы захотите попить и вспомните про воду. Хотите чувствовать себя комфортно, что бы фотосессия не превратилась в испытание, смените свадебные туфли на балетки.\n\n Сколько раз я слышал от невест, что у нее такие удобные туфли и ей не нужна ни какая сменная обувь. Через час прогулки, сидя на скамеечке, она говорила, что я был прав. Свадебный фотограф скажет, где надо сменить обувь для нужного кадра. Зонт с нашей изменчивой погодой лишним не будет, а запасная рубашка подарит комфорт жениху в конце съемки. А булавки поверьте пригодятся',
        img: [num[4], images[3]]
    },
    {
        title: 'Покупка одноразовой тары.',
        text: 'Гораздо практичней на фуршет взять пластиковую посуду. Я не о практичности, а о цвете, купите прозрачную, белую или как на фото тару.\n\nЦветные стаканчики, синего, красного и других цветов на фотографиях смотрятся очень пестро, и привлекают много внимания. Это мелочь, но выполнить эту рекомендацию не сложно, а ваши фото от этого выиграют.',
        img: [num[5], images[4]]
    },
    {
        title: 'Свидетели- ваши главные помощники !',
        text: 'В свадебный день, свидетели берут на себя львиную часть хлопот и это нормально. Они становятся правой рукой молодожён. Отдайте свидетелям телефоны, они взрослые люди и смогут решить все проблемы. Это ваш день получайте от него максимум удовольствия.\n\n Постоянные звонки будут отвлекать и раздражать вас. Пусть у них будут ваши телефоны и вещи приготовленные для прогулки. Так же им придется изредка помогать фотографу и оператору. Свадебная фотосессия полна сюрпризов и вы не раз скажите им спасибо !',
        img: [num[6], images[5]]
    },
    {
        title: 'А что если дождь ?',
        text: 'Было бы идеально, если бы мы могли заказывать погоду заранее. Хотя бы знать точно какая будет погода через месяц. Поскольку это не возможно пока. Надо страховаться и выбрать заранее места для съемок на случай не погоды.\n\n Одно из самых простых решений забронировать студию, хотя бы на часок. Свадебная фотосессия от этого только выиграет. Вы в любом случае получите больше разнообразных кадров и у вас всегда будет место для съемки в не погоду. Театр, гостиница, кафе или ресторан, все это отличные альтернативы для съемки в плохую погоду.\n\n Подумайте об этом заранее, созвонитесь и уточните возможно ли провести съемку в выбранном вами месте. Какова стоимость часа съемки, свободно ли выбранное вами время и необходима ли бронь.',
        img: [num[7], images[6]]
    },
];

//= PerfectWeddingPhotoSession 
const PerfectWeddingPhotoSession = () => {
    //* hooks 
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    //* render 
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

            <HederArticles title={'7 советов- идеальная свадебная фотосессия'}/>
            <div className="options">
                <ArticleOption text={'Прочитайте подборку советов, которые помогут вам при планировании и проведении свадебной фотосессии. Я отснял не один десяток пар и понял, как часто люди повторяют одни и те же ошибки. Которых с легкостью можно избежать избавившись от неприятных сюрпризов. Прочитайте и свадебная фотосессия пройдет как по нотам !'}/>
                <FinaleBox title={finaleDB[0].title} text={finaleDB[0].text} img={finaleDB[0].img} side />
                <FinaleBox title={finaleDB[1].title} text={finaleDB[1].text} img={finaleDB[1].img} />
                <FinaleBox title={finaleDB[2].title} text={finaleDB[2].text} img={finaleDB[2].img} side />
                <FinaleBox title={finaleDB[3].title} text={finaleDB[3].text} img={finaleDB[3].img} />
                <FinaleBox title={finaleDB[4].title} text={finaleDB[4].text} img={finaleDB[4].img} side />
                <FinaleBox title={finaleDB[5].title} text={finaleDB[5].text} img={finaleDB[5].img} />
                <FinaleBox title={finaleDB[6].title} text={finaleDB[6].text} img={finaleDB[6].img} side />
            </div>
        </>
    )
}

export default PerfectWeddingPhotoSession;