import { IImage } from "./loadingImgForMainPage";
import React from "react";
import PictureObserver from "../components/picture.observer/PictureObserver";
import { FC } from "react";


interface ICreateColumn {
    arr: IImage[];
    row: number;
    keyEl: number;
}


 /** `Создает одну калонку с изображениями.` */
const CreateColumn: FC<ICreateColumn> = ({arr, row, keyEl}) => {

    const rows = arr.map((item, i) => {
        return (
            <PictureObserver item={item} row={row} key={i + 'img'} />
        )
    })
    
    return (
        <div className="gallery__column" key={keyEl}>
            {rows}
        </div>
    )
};


export default CreateColumn;