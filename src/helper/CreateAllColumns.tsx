import { picturesForPageMain, IImage, order, orderTwoColumn } from './loadingImgForMainPage';
import React from 'react';
import CreateColumn from './CreateColumn';
import { FC } from 'react';
import { number } from 'yup';


interface ICreateAllColumns {
    /** `количество рядов в галерее` */
    row: 4 | 2;
}


/** 
 * `Создание колонок для галереи.`
 * @param row Количество рядов которое создаем.
 * */
const CreateAllColumns: FC<ICreateAllColumns> = ({row}) => {
    /** `Все элементы изображений для отображения.` */
    const pictures: React.JSX.Element[] = [];

    if(row === 4) {
         /** `Ключи массивов, колонки 1-2-3-4` */
        const columnKey = Object.keys(order);

        for(const key of columnKey) {
            let elementsColumn: IImage[] = [];
            order[key].forEach((item: number) => {
                picturesForPageMain[item].name = item;
                elementsColumn.push(picturesForPageMain[item])
            });
            pictures.push(<CreateColumn arr={elementsColumn} row={row} itemKey={key} key={key} />)
        }
    } else {
         /** `Ключи массивов, колонки 1-2` */
        const columnKey = Object.keys(orderTwoColumn);

        for(const key of columnKey) {
            let elementsColumn: IImage[] = [];
            orderTwoColumn[key].forEach(item => {
                elementsColumn.push(picturesForPageMain[item])
            });
            pictures.push(<CreateColumn arr={elementsColumn} row={row} itemKey={key} key={key} />)
        }
    }

    return (
        <>
            {pictures}
        </>
    );
}


export default CreateAllColumns;