import { IMG_MY } from "@/data/image/weddings/MY";
import { IMG_DA } from "@/data/image/weddings/DA";
import { IMG_DK } from "@/data/image/weddings/DK";
import { IMG_JD } from "@/data/image/weddings/JD";
import { IMG_PT } from "@/data/image/weddings/PT";
import { IMG_SY } from "@/data/image/weddings/SY";
import { IMG_SD } from "@/data/image/weddings/SD";
import { IMG_SL } from "@/data/image/weddings/SL";
import { IMG_NK } from "@/data/image/weddings/NK";

import type { IImageWedding } from "@/data/image/weddings/types";

/**
 * `Получения данных для отображения свадьбы.`
 * @param link часть для получения данных. Например: "MY" 
 * @example return
 * allImages: Массив с изображениями.
 * title: Заголовок свадьбы.
 */
export const getWeddingImages = (link: string) => {

    let allImages: IImageWedding[] | undefined = [];
    let title: string = '';

    switch (link) {
        case 'MY':
            title = 'Максим & Юля';
            allImages = IMG_MY;
            break;
        case 'PT':
            title = 'Паша & Таня';
            allImages = IMG_PT;
            break;
        case 'DA':
            title = 'Дима & Алина';
            allImages = IMG_DA;
            break;
        case 'SY':
            title = 'Саша & Юля';
            allImages = IMG_SY;
            break;
        case 'DK':
            title = 'Дима & Ксюша';
            allImages = IMG_DK;
            break;
        case 'SD':
            title = 'Саша & Даша';
            allImages = IMG_SD;
            break;
        case 'SL':
            title = 'Саша & Люда';
            allImages = IMG_SL;
            break;
        case 'NK':
            title = 'Никита & Катя';
            allImages = IMG_NK;
            break;
        case 'JD':
            title = 'Женя & Даша';
            allImages = IMG_JD;
            break;

        default:
            title= 'Error';
            allImages = undefined;
            break;
    }

    return {
        allImages,
        title
    }
}