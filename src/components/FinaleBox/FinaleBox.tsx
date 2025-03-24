import '../../pages/ArticlesPages/beautiful-wedding-finale/beautifulWeddingFinale.scss';
import { FC } from "react";

interface IFinaleBox {
    title: string;
    text: string;
    img: string[];
    side?: boolean;
}


const FinaleBox: FC<IFinaleBox> = ({
    title, 
    text, 
    img,
    side = false
}) => {
    
    const sideStyle = side ? 'left-img__item-img' : 'left-img__item-img _order-2';
    const sideStyleTwo = side ? 'left-img__item-text' : 'left-img__item-text _order-1';

    return(
            <div className="left-img">
                <div className="left-img__body">
                    <div className={sideStyle}>
                        <div className="left-img__item-img-box">
                            <img src={img[1]} alt="number"/>
                        </div>
                    </div>
                    <div className={sideStyleTwo}>
                        <div className="left-img__text-body">
                            <img src={img[0]} alt="торт"/>
                            <div className="left-img__title">{title}</div>
                        </div>
                        <div className="left-img__text">{text}</div>
                    </div>
                </div>
            </div>
    )
}


export default FinaleBox;

