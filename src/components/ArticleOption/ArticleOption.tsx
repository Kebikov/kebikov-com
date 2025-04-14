import './articleOption.scss';
import { FC, ReactNode } from 'react';


interface IArticleOption {
    text: string | ReactNode;
}


const ArticleOption: FC<IArticleOption> = ({
    text
}) => {

    //* render 
    return(
        <div className="options__text">{text}</div>
    )
}

export default ArticleOption;