import './faq.scss';
import { useEffect, useState, useCallback } from 'react';

const arrQuestion = [
    {
        case:'СКОЛЬКО СТОИТ СВАДЕБНАЯ ФОТОСЕССИЯ ?',
        answer: 'Вы можете выбрать один из четырех пакетов свадебной фотосессии, или мы с вами вместе сформируем ваш индивидуальный комплекс услуг, убрав или добавив пункты по желанию. Спектр цен  гибко подстраивается под практически любой свадебный бюджет. Пожалуйста, свяжитесь со мной лично, чтобы обговорить все детали свадебного дня и составить для вас индивидуальный пакет услуг в зависимости от ваших пожеланий.'
    },
    {
        case:'СНИМАЕТЕ ЛИ ВЫ СВАДЕБНЫЕ ФОТОСЕССИИ В ДРУГИХ ГОРОДАХ ?',
        answer: 'Да, я снимаю свадьбы в любом месте.'
    },
    {
        case:'КАКОЕ КОЛИЧЕСТВО СВАДЕБНЫХ ФОТОГРАФИЙ МЫ ПОЛУЧИМ ?',
        answer: 'Как вы знаете, количество никак не связано с качеством. Несмотря на это, постараюсь не уйти от ответа. Вы получите минимум одну фотографию каждые две минуты фотосъемки.'
    },
    {
        case:'КОГДА МЫ ПОЛУЧИМ СВАДЕБНЫЕ ФОТОГРАФИИ ?',
        answer: 'Не позднее 90 дней готовый результат будет у вас. Также есть вариант для тех, кто хочет поскорее получить фотографии, — дополнительная услуга экспресс обработки, которая сокращает время ожидания до 10 дней.'
    },
    {
        case:'СКОЛЬКО ФОТОГРАФИЙ БУДЕТ ОБРАБОТАНО ?',
        answer: 'Все, абсолютно все фотографии проходят цветокоррекцию и тоновую корректировку. Классические, яркие и натуральные цвета, все то, что вы видели в моем портфолио. Для получения достойного результата мы с вами еще при встрече подберем оптимальные локации для свадебной фотосессии.'
    },
    {
        case:'ЕСТЬ ЛИ У ВАС СКИДКИ ?',
        answer: 'Скидок у меня нет, вы можете рассчитывать на меньшую цену съемочного часа при заказе более продолжительного пакета услуг, это связано с тем, что мне хочется показать всю историю свадебного дня, а не его часть.'
    },
    {
        case:'КАК ЗАБРОНИРОВАТЬ ДАТУ СВАДЬБЫ ?',
        answer: 'Предварительную бронь даты вы можете сделать по телефону  +375 29 694 98 43,  мы оговариваем дату и время нашей встречи, на которой мы знакомимся, обсуждаем все ваши пожелания, подписываем договор. Вносится предоплата 100 у.е. и все, дата ваша и только ваша !'
    },
    {
        case:'КАК ВЫ ОТДАЕТЕ СВАДЕБНЫЕ ФОТОГРАФИИ ?',
        answer: 'Я как свадебный фотограф, хочу дать своим клиентам максимум положительных эмоций.Свадебная фотосессия будет записана на флеш USB из дерева с гравировкой ваших имен, я бесплатно распечатаю для вас свадебные фото и все это будет упаковано в деревянный короб на котором будет выполненна индивидуальная гравировка.'
    },
]

//= Faq 
const Faq = () => {
    //* hook 
    useEffect(() => {
        window.addEventListener('resize', delay(size, 100));
        //size();

        return() => {
            window.removeEventListener('resize', size);
        }
    },[]);

    //* state 
    const [widthFaq, setWidthFaq] = useState(document.documentElement.clientWidth);
    const [keyCurrent, setKeyCurrent] = useState(-1);

    //* code 

    const delay = (fnc, time) => {
        let timeOut;
        return function () {
            clearTimeout(timeOut);
            timeOut = setTimeout(fnc, time);
        }
    }
    
    const size = () => {
        let widthCurrent = document.documentElement.clientWidth;
        setWidthFaq(widthCurrent);
    }


    const items = arrQuestion.map((item, i) => {
        return (
            <Question arr={item} setKeyCurrent={setKeyCurrent} keyCurrent={keyCurrent} id={i} key={i}/>
        )});


    //* return 
    return(
            <div className="faq" style={{width: widthFaq > 1400 ? '1400px' : `${widthFaq}px`}}>
                <div className="faq__body">
                    <div className="faq__text">Уважаемые молодожёны, сейчас я постараюсь осветить наиболее часто встречающиеся вопросы нашего творческого сотрудничества. Хочу, чтобы после прочтения, вам все стало понятнее. Приятного чтения.</div>
                    <div className="faq__title">FAQ</div>
                    {items}
                    <div className="question__line"/>
                </div>
                <div className="border-bottom"/>
            </div>
    )
}

//= Question 
const Question = ({arr, setKeyCurrent, keyCurrent, id}) => {

    //* code 
    const onOpen = (e) => {
        let key = e.target.closest('.question').getAttribute('data-id');
        let hiAnswer = e.target.closest('.question').querySelector('.question__answer').offsetHeight;
        if(hiAnswer === 0) {
            setKeyCurrent(key);
        }else{
            setKeyCurrent(-1);
        }
        
    }

    //* return 
    return(
        <div className="question" onClick={onOpen} data-id={id}>
            <div className="question__line"/>
            <div className={+keyCurrent === id ? "question__case rotate" : "question__case"}>{arr.case}</div>
            <div className={+keyCurrent === id ? "question__answer rotate" : "question__answer"}>{arr.answer}</div>
        </div>
    )
}


export default Faq;