import { IItemQuestion } from "../../data/arrQuestion";
import { FC } from "react";


interface IQuestion {
    item: IItemQuestion;
    setCurrentId: React.Dispatch<React.SetStateAction<number>>;
    currentId: number;
    id: number;
}


const Question: FC<IQuestion> = ({
    item, 
    setCurrentId, 
    currentId, 
    id
}) => {


    return(
        <div 
            className="question" 
            onClick={() => setCurrentId(id)} 
        >
            <div className="question__line"/>
            <h2 className={currentId === id ? "question__case rotate" : "question__case"}>{item.case}</h2>
            <div className={currentId === id ? "question__answer rotate" : "question__answer"}>{item.answer}</div>
        </div>
    )
}

export default Question;