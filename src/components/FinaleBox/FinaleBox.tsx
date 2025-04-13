import '../../pages/ArticlesPages/beautiful-wedding-finale/beautifulWeddingFinale.scss';
import { IImageWedding } from '@/data/image/weddings/types';
import ImageWedding from '../ImageWedding/ImageWedding';
import { FC } from "react";
import { ReactNode } from 'react';

interface IFinaleBox {
    title: string;
    text: string | ReactNode;
    img: [string, IImageWedding];
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
                            <ImageWedding item={img[1]}/>
                        </div>
                    </div>
                    <div className={sideStyleTwo}>
                        <div className="left-img__text-body">
                            <img src={img[0]} alt="number"/>
                            <div className="left-img__title">{title}</div>
                        </div>
                        <div className="left-img__text">{text}</div>
                    </div>
                </div>
            </div>
    )
}


export default FinaleBox;

