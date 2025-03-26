import { IItemQuestion } from "../price-faq/arrQuestion";
import { FC, useRef, useState } from "react";



interface IQuestion {
    item: IItemQuestion;
    setKeyCurrent: React.Dispatch<React.SetStateAction<number>>;
    keyCurrent: number;
    id: number;
}


const Question: FC<IQuestion> = ({
    item, 
    setKeyCurrent, 
    keyCurrent, 
    id
}) => {

    const onOpen = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const questionElm = target.closest('.question') as HTMLElement | null;
        if(!questionElm) return;

        const attributeDataId = questionElm.getAttribute('data-id');

        let questionAnswerElm = questionElm.querySelector('.question__answer') as HTMLElement | null;
        if(!questionAnswerElm) return;

        const hiAnswer = questionAnswerElm.offsetHeight;

        if(hiAnswer === 0) {
            setKeyCurrent(Number(attributeDataId));
        }else{
            setKeyCurrent(-1);
        }
        
    }

    return(
        <div className="question" onClick={onOpen} data-id={id} >
            <div className="question__line"/>
            <h3 className={+keyCurrent === id ? "question__case rotate" : "question__case"}>{item.case}</h3>
            <div className={+keyCurrent === id ? "question__answer rotate" : "question__answer"}>{item.answer}</div>
        </div>
    )
}

export default Question;