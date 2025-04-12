import type { IImageWedding } from "@/data/image/weddings/types";
import { ReactNode } from "react";

export type TSeries = 'MY' | 'PT' | 'DA' | 'DK' | 'JD' | 'SY' | 'SD' | 'SL' | 'NK';

export interface IDataWeddingSeries {
     /** `Заголовок для свадьбы.` */
    title: string;
     /** `Изображения свадьбы.` */
    images: IImageWedding[];
     /** `Описание всадебного дня.` */
    description?: ReactNode;
}

export type TDataWeddingSeries = {
    [key in TSeries]: IDataWeddingSeries
}