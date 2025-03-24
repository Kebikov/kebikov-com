import { IMG_main_page, orderOneColumn, orderTwoColumn} from '@/data/image/main-page';
import type { IImageWedding } from '@/data/image/weddings/types';
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
    /** `Все элементы изображений для отображения.` */
    const pictures: React.JSX.Element[] = [];

    if(row === 4) {
         /** `Ключи массивов, колонки 1-2-3-4` */
        const columnKey = Object.keys(orderOneColumn);

        for(const key of columnKey) {
            let elementsColumn: IImageWedding[] = [];
            orderOneColumn[key].forEach((item: number) => {
                //IMG_main_page[item].name = item;
                elementsColumn.push(IMG_main_page[item])
            });
            pictures.push(<CreateColumn arr={elementsColumn} row={row} itemKey={key} key={key} />)
        }
    } else {
         /** `Ключи массивов, колонки 1-2` */
        const columnKey = Object.keys(orderTwoColumn);

        for(const key of columnKey) {
            let elementsColumn: IImageWedding[] = [];
            orderTwoColumn[key].forEach(item => {
                elementsColumn.push(IMG_main_page[item])
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