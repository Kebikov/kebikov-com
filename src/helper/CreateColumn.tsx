import { IImage } from "./loadingImgForMainPage";
import React from "react";
import PictureObserver from "../components/picture.observer/PictureObserver";
import { FC } from "react";


interface ICreateColumn {
    arr: IImage[];
    row: number;
     /** `Номер колонки 1-2-3-4` */
    itemKey: string;
}


 /** `Создает одну калонку с изображениями.` */
const CreateColumn: FC<ICreateColumn> = ({arr, row, itemKey}) => {

    const rows = arr.map((item, i) => {
        return (
            <PictureObserver item={item} row={row} key={i} />
        )
    })
    
    return (
        <div className="gallery__column" key={itemKey}>
            {rows}
        </div>
    )
};


export default CreateColumn;