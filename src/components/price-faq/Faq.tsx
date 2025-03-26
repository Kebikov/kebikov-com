import './faq.scss';
import { FC, useState } from 'react';
import { arrQuestion, IItemQuestion } from './arrQuestion';
import Question from '../Question/Question';


const Faq: FC = () => {

    const [keyCurrent, setKeyCurrent] = useState<number>(-1);

    return(
            <div className="faq">
                <div className="faq__body">
                    <h1 className='faq__h1' >Свадебный фоторгаф Минск, стоимость услуг.</h1>
                    <div className="faq__text">Уважаемые молодожёны, сейчас я постараюсь осветить наиболее часто встречающиеся вопросы нашего творческого сотрудничества. Хочу, чтобы после прочтения, вам все стало понятнее. Приятного чтения.</div>
                    <div className="faq__title">FAQ</div>
                    {
                        arrQuestion.map((item, i) => 
                            <Question 
                                item={item} 
                                setKeyCurrent={setKeyCurrent} 
                                keyCurrent={keyCurrent} 
                                id={i} 
                                key={i}
                            />
                        )
                    }
                    <div className="question__line"/>
                </div>
                <div className="border-bottom"/>
            </div>
    )
}

export default Faq;