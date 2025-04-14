import './TitleArticle.scss';
import { FC } from "react";


interface ITitleArticle {
    text: string;
}

const TitleArticle: FC<ITitleArticle> = ({
    text
}) => {
    return(
        <div className="TitleArticle" >
            <p>{text}</p>
        </div>
    )
}

export default TitleArticle;