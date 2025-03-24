import { IImageWedding } from "@/data/image/weddings/types";
import { FC } from "react";
import ImageWedding from "@/components/ImageWedding/ImageWedding";


interface ICreateColumn {
    arr: IImageWedding[];
    row: number;
     /** `Номер колонки 1-2-3-4` */
    itemKey: string;
}


 /** `Создает одну калонку с изображениями.` */
const CreateColumn: FC<ICreateColumn> = ({arr, row, itemKey}) => {

    const rows = arr.map((item, i) => {
        return (
            <ImageWedding item={item} press key={i} />
        )
    })
    
    return (
        <div className="gallery__column" key={itemKey}>
            {rows}
        </div>
    )
};


export default CreateColumn;