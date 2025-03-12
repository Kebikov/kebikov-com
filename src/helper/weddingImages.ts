import getAllImages from "./getAllImages";
import type { TJpgWebp } from "./getAllImages";

/**
 * `Получения данных для отображения свадьбы.`
 * @param link часть для получения данных. Например: "MY" 
 * @example return
 * allImages: Массив с изображениями.
 * title: Заголовок свадьбы.
 */
export const weddingImages = (link: string) => {

    let allImages: TJpgWebp[] = [];
    let title: string = '';

    switch (link) {
        case 'MY':
            title = 'Максим & Юля';
            allImages = getAllImages(require.context('../resources/images/weddings/MY', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'PT':
            title = 'Паша & Таня';
            allImages = getAllImages(require.context('../resources/images/weddings/PT', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'DA':
            title = 'Дима & Алина';
            allImages = getAllImages(require.context('../resources/images/weddings/DA', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'SY':
            title = 'Саша & Юля';
            allImages = getAllImages(require.context('../resources/images/weddings/SY', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'DK':
            title = 'Дима & Ксюша';
            allImages = getAllImages(require.context('../resources/images/weddings/DK', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'SD':
            title = 'Саша & Даша';
            allImages = getAllImages(require.context('../resources/images/weddings/SD', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'SL':
            title = 'Саша & Люда';
            allImages = getAllImages(require.context('../resources/images/weddings/SL', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'NK':
            title = 'Никита & Катя';
            allImages = getAllImages(require.context('../resources/images/weddings/NK', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'JD':
            title = 'Женя & Даша';
            allImages = getAllImages(require.context('../resources/images/weddings/JD', false, /\.(png|jpe?g|svg|webp)$/));
            break;

        default:
            title= 'Error';
            allImages = getAllImages(require.context('../resources/images/weddings/MY', false, /\.(png|jpe?g|svg|webp)$/));
            break;
    }

    return {
        allImages,
        title
    }
}