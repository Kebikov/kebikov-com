import './faq.scss';
import { useEffect, useState } from 'react';

//= Faq 
const Faq = () => {

    //* hook 
    useEffect(() => {
        window.addEventListener('resize', size);
        size();

        return() => {
            window.removeEventListener('resize', size);
        }
    },[]);

    const [widthFaq, setWidthFaq] = useState('auto');

    //* code 
    const size = () => {
        let widthCurrent = document.documentElement.clientWidth;
        setWidthFaq(widthCurrent);
    }

    //* return 
    return(
            <div className="faq" style={{width: widthFaq > 1400 ? '1400px' : `${widthFaq}px`}}>
                <div className="faq__body">
                    <div className="faq__text">Уважаемые молодожёны, сейчас я постараюсь осветить наиболее часто встречающиеся вопросы нашего творческого сотрудничества. Хочу, чтобы после прочтения, вам все стало понятнее. Приятного чтения.</div>
                    <div className="faq__title">FAQ</div>
                    <Question/>
                </div>
            </div>
    )
}

//= Question 
const Question = () => {

    return(
        <div className="question">
            <div className="question__line"/>
            <div className="question__case">СКОЛЬКО СТОИТ СВАДЕБНАЯ ФОТОСЕССИЯ ?</div>
            <div className="question__answer">Вы можете выбрать один из четырех пакетов свадебной фотосессии, или мы с вами вместе сформируем ваш индивидуальный комплекс услуг, убрав или добавив пункты по желанию. Спектр цен  гибко подстраивается под практически любой свадебный бюджет. Пожалуйста, свяжитесь со мной лично, чтобы обговорить все детали свадебного дня и составить для вас индивидуальный пакет услуг в зависимости от ваших пожеланий.</div>
            <div className="question__line"/>
        </div>
    )
}

export default Faq;