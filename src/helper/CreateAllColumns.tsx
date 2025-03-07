import { picturesForPageMain, IImage, order, orderTwoColumn } from './loadingImgForMainPage';
import React from 'react';
import CreateColumn from './CreateColumn';
import { FC } from 'react';


interface ICreateAllColumns {
    /** `количество рядов в галерее` */
    row: 4 | 2;
}


/** 
 * `Создание колонок для галереи.`
 * @param row Количество рядов которое создаем.
 * */
const CreateAllColumns: FC<ICreateAllColumns> = ({row}) => {
    /** `Ключ для каждого элемента изображения.` */
    let keyForColumn: number = 0;
    /** `Все элементы изображений для отображения.` */
    const pictures: React.JSX.Element[] = [];

    if(row === 4) {
         /** `Ключи массивов, колонки 1-2-3-4` */
        const columnKey = Object.keys(order);

        for(const key of columnKey) {
            let elementsColumn: IImage[] = [];
            order[key].forEach(item => {
                elementsColumn.push(picturesForPageMain[item])
            });
            pictures.push(<CreateColumn arr={elementsColumn} row={row} keyEl={keyForColumn} key={keyForColumn}/>)
            keyForColumn++;
        }
    } else {
         /** `Ключи массивов, колонки 1-2` */
        const columnKey = Object.keys(orderTwoColumn);

        for(const key of columnKey) {
            let elementsColumn: IImage[] = [];
            order[key].forEach(item => {
                elementsColumn.push(picturesForPageMain[item])
            });
            pictures.push(<CreateColumn arr={elementsColumn} row={row} keyEl={keyForColumn} key={keyForColumn}/>)
            keyForColumn++;
        }
    }

    return (
        <>
            {pictures}
        </>
    );
}


export default CreateAllColumns;