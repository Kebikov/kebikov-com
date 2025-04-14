import './BlockArticle.scss';
import TitleArticle from "../TitleArticle/TitleArticle";
import ImageWedding from "../ImageWedding/ImageWedding";
import { IImageWedding } from "@/data/image/weddings/types";
import { FC } from "react";
import { ReactNode } from "react";


interface IBlockArticle {
    title: string;
    img: IImageWedding;
    children: ReactNode;
}


const BlockArticle: FC<IBlockArticle> = ({
    title,
    img,
    children
}) => {
    return(
        <div className="blockArticle" >
            <TitleArticle text={title} />
            <div className="blockArticle__text" >
                <div className="blockArticle__img">
                    <ImageWedding item={img} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default BlockArticle;