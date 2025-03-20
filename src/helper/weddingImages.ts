import getAllImages from "./getAllImages";
import type { TJpgWebp } from "./getAllImages";
import { IMG_MY } from "@/data/image/weddings/MY";
import type { IImageWedding } from "@/data/image/weddings/types";

/**
 * `Получения данных для отображения свадьбы.`
 * @param link часть для получения данных. Например: "MY" 
 * @example return
 * allImages: Массив с изображениями.
 * title: Заголовок свадьбы.
 */
export const weddingImages = (link: string) => {

    let allImages: TJpgWebp[] | IImageWedding[] = [];
    let title: string = '';

    switch (link) {
        case 'MY':
            title = 'Максим & Юля';
            allImages = IMG_MY;
            break;
        case 'PT':
            title = 'Паша & Таня';
            allImages = getAllImages(require.context('../resources/images/weddings/PT', false, /\.(png|jpe?g|svg|webp)$/)).images;
            break;
        case 'DA':
            title = 'Дима & Алина';
            allImages = getAllImages(require.context('../resources/images/weddings/DA', false, /\.(png|jpe?g|svg|webp)$/)).images;
            break;
        case 'SY':
            title = 'Саша & Юля';
            allImages = getAllImages(require.context('../resources/images/weddings/SY', false, /\.(png|jpe?g|svg|webp)$/)).images;
            break;
        case 'DK':
            title = 'Дима & Ксюша';
            allImages = getAllImages(require.context('../resources/images/weddings/DK', false, /\.(png|jpe?g|svg|webp)$/)).images;
            break;
        case 'SD':
            title = 'Саша & Даша';
            allImages = getAllImages(require.context('../resources/images/weddings/SD', false, /\.(png|jpe?g|svg|webp)$/)).images;
            break;
        case 'SL':
            title = 'Саша & Люда';
            allImages = getAllImages(require.context('../resources/images/weddings/SL', false, /\.(png|jpe?g|svg|webp)$/)).images;
            break;
        case 'NK':
            title = 'Никита & Катя';
            allImages = getAllImages(require.context('../resources/images/weddings/NK', false, /\.(png|jpe?g|svg|webp)$/)).images;
            break;
        case 'JD':
            title = 'Женя & Даша';
            allImages = getAllImages(require.context('../resources/images/weddings/JD', false, /\.(png|jpe?g|svg|webp)$/)).images;
            break;

        default:
            title= 'Error';
            allImages = getAllImages(require.context('../resources/images/weddings/MY', false, /\.(png|jpe?g|svg|webp)$/)).images;
            break;
    }

    return {
        allImages,
        title
    }
}