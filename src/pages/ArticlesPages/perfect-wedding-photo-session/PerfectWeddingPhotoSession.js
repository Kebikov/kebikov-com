import './perfectWeddingPhotoSession.scss';
import usehelpPassAllImg from '../../../hooks/usehelpPassAllImg';
import useArticle from '../../../hooks/useArticle';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import HederArticles from '../../../components/HederArticles/HederArticles';
import ArticleOption from '../../../components/ArticleOption/ArticleOption';
import png1 from '../../../resources/images/articles/beautiful-wedding-finale/1.png';
import png2 from '../../../resources/images/articles/beautiful-wedding-finale/2.png';
import png3 from '../../../resources/images/articles/beautiful-wedding-finale/3.png';
import png4 from '../../../resources/images/articles/beautiful-wedding-finale/4.png';
import png5 from '../../../resources/images/articles/beautiful-wedding-finale/5.png';
import png6 from '../../../resources/images/articles/beautiful-wedding-finale/6.png';
import png7 from '../../../resources/images/articles/beautiful-wedding-finale/7.png';

const allImg = usehelpPassAllImg(require.context('../../../resources/images/articles/perfect-wedding-photo-session/', false, /\.(png|jpe?g|svg|webp)$/), 1);

const finaleDB = [
    {
        title: 'Сколько длится свадебная фотосессия?',
        text: 'Начну с того, что редко свадебный день проходит строго по плану. В расчет не берутся многие моменты из которых складываются часы не учтенного времени. В идеале свадебная фотосессия длится три часа. Примерно один час уходит на дорогу и смену локаций и два часа на саму съемку.\n\n На практике, лучшие кадры приносит именно второй час съемки, свадебный фотограф входит в творческую колею. Вам надо время привыкнуть камере и расслабится. В итоге три часа съемки- это золотая середина, вы не устанете от съемки, а фотограф получит нужные кадры.',
        img: [png1, [allImg[0][0]]]
    },
    {
        title: 'Гости на прогулке.',
        text: 'Выбирая места для съемок, подумайте заранее, чем будут заняты гости во время съемки. Ведь свадебная фотосессия длится не один час и это время будет длится вечно, если не занять их чем либо. Присмотрев место для съемки, сразу подумайте где оставить гостей и чем их занять, это сэкономит время и нервы в свадебный день.',
        img: [png2, [allImg[1][0]]]
    },
    {
        title: 'А можно с вами ?',
        text: 'Свадебная фотосессия должна проходить в стиле минимализма гостей. На прогулке должны быть: молодожёны, свидетели, свадебный фотограф, если есть оператор и все! Конечно гости не будут стоять в сторонке и мирно наблюдать, всем надо сделать снимки на свой фотоаппарат. Как же без дельного совета, не только молодожёнам,но и фотографу и оператору.\n\n Это только кажется, что времени много, вы и не заметите как пройдет съемка. Гости будут только отвлекать вас и не дадут расслабится. Так что, возьмите с собой только свидетелей .',
        img: [png3, [allImg[2][0]]]
    },
    {
        title: 'Что взять ?',
        text: 'Питьевая вода 1.5 литра, запасная рубашка, балетки или любая удобная обувь, зонт, булавки, все это должно быть с вами, что бы свадебная фотосессия прошла как по нотам ! Через час на жаре вы захотите попить и вспомните про воду. Хотите чувствовать себя комфортно, что бы фотосессия не превратилась в испытание, смените свадебные туфли на балетки.\n\n Сколько раз я слышал от невест, что у нее такие удобные туфли и ей не нужна ни какая сменная обувь. Через час прогулки, сидя на скамеечке, она говорила, что я был прав. Свадебный фотограф скажет, где надо сменить обувь для нужного кадра. Зонт с нашей изменчивой погодой лишним не будет, а запасная рубашка подарит комфорт жениху в конце съемки. А булавки поверьте пригодятся',
        img: [png4, [allImg[3][0]]]
    },
    {
        title: 'Покупка одноразовой тары.',
        text: 'Гораздо практичней на фуршет взять пластиковую посуду. Я не о практичности, а о цвете, купите прозрачную, белую или как на фото тару.\n\nЦветные стаканчики, синего, красного и других цветов на фотографиях смотрятся очень пестро, и привлекают много внимания. Это мелочь, но выполнить эту рекомендацию не сложно, а ваши фото от этого выиграют.',
        img: [png5, [allImg[4][0]]]
    },
    {
        title: 'Свидетели- ваши главные помощники !',
        text: 'В свадебный день, свидетели берут на себя львиную часть хлопот и это нормально. Они становятся правой рукой молодожён. Отдайте свидетелям телефоны, они взрослые люди и смогут решить все проблемы. Это ваш день получайте от него максимум удовольствия.\n\n Постоянные звонки будут отвлекать и раздражать вас. Пусть у них будут ваши телефоны и вещи приготовленные для прогулки. Так же им придется изредка помогать фотографу и оператору. Свадебная фотосессия полна сюрпризов и вы не раз скажите им спасибо !',
        img: [png6, [allImg[5][0]]]
    },
    {
        title: 'А что если дождь ?',
        text: 'Было бы идеально, если бы мы могли заказывать погоду заранее. Хотя бы знать точно какая будет погода через месяц. Поскольку это не возможно пока. Надо страховаться и выбрать заранее места для съемок на случай не погоды.\n\n Одно из самых простых решений забронировать студию, хотя бы на часок. Свадебная фотосессия от этого только выиграет. Вы в любом случае получите больше разнообразных кадров и у вас всегда будет место для съемки в не погоду. Театр, гостиница, кафе или ресторан, все это отличные альтернативы для съемки в плохую погоду.\n\n Подумайте об этом заранее, созвонитесь и уточните возможно ли провести съемку в выбранном вами месте. Какова стоимость часа съемки, свободно ли выбранное вами время и необходима ли бронь.',
        img: [png7, [allImg[6][0]]]
    },
];

//= PerfectWeddingPhotoSession 
const PerfectWeddingPhotoSession = ({setLineHeader}) => {
    //* hooks 
    useEffect(() => {
        window.scrollTo(0, 0);
        setLineHeader(false);
        return() => {
            setLineHeader(true);
        }
    },[]);
    const {FinaleBox} = useArticle();

    //* render 
    return(
        <>
            <Helmet>
                <title>7 Советов для Идеальной Свадебной Фотосесии</title>
                <meta
                    name="description"
                    content="Прочитайте подборку советов и свадебная фотосессия пройдет как по нотам. Пары повторяют одни и те же ошибки, какие?"
                />
            </Helmet>

            <HederArticles title={'7 советов- идеальная свадебная фотосессия'}/>
            <div className="options">
                <ArticleOption text={'Прочитайте подборку советов, которые помогут вам при планировании и проведении свадебной фотосессии. Я отснял не один десяток пар и понял, как часто люди повторяют одни и те же ошибки. Которых с легкостью можно избежать избавившись от неприятных сюрпризов. Прочитайте и свадебная фотосессия пройдет как по нотам !'}/>
                <FinaleBox info={finaleDB[0]} side={true}/>
                <FinaleBox info={finaleDB[1]} side={false}/>
                <FinaleBox info={finaleDB[2]} side={true}/>
                <FinaleBox info={finaleDB[3]} side={false}/>
                <FinaleBox info={finaleDB[4]} side={true}/>
                <FinaleBox info={finaleDB[5]} side={false}/>
                <FinaleBox info={finaleDB[6]} side={true}/>
            </div>
        </>
    )
}

export default PerfectWeddingPhotoSession;