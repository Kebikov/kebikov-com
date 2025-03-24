/// <reference types="webpack-env" />


type RequireContext = __WebpackModuleApi.RequireContext;

type ObjectFromString = {[key in string]: string}

export type TJpgWebp = {
    jpg: string;
    jpg_mobile?: string;

    webp?: string;
    webp_mobile?: string;

    avif?: string;
    avif_mobile?: string;
}


const getAllImages = (context: RequireContext): {images: TJpgWebp[]} => {

     /** `Импорт всех изображений в обьект.` */
    function importImagesInObject(context: RequireContext): ObjectFromString {
        /**
         * `Обьект из ключей как имя файла и значения как путь к файлу.`
         * @example
         * imagesObject:
         * {
         *  '1.jpg': '/static/media/1.c4d4ce29ae8877a64aa0.jpg',
         *  '2.jpg': '/static/media/2.c4d4ce29ae8877a64aa0.jpg',
         * }
         */
        let imagesObject: ObjectFromString = {};
        /**
         * @example
         * item: './1.jpg' или 'resources/images/weddings/MY/1.jpg'
         */
        context.keys().forEach((item) => { 
            if(typeof item === 'string' && item.startsWith('./')) {
                /**
                 * `context(item) вернет сформировинный путь к изображению.`
                 * @example
                 * Например: "/static/media/1.c4d4ce29ae8877a64aa0.jpg"
                 */
                const formedImagePath: string = context(item);
                imagesObject[item.replace('./', '')] = formedImagePath;
            }
        });
        return imagesObject;
    }


    function allImg () {
        const images = importImagesInObject(context);

        const arrImg: Array<TJpgWebp> = [];
        const keys = Object.keys(images);
        /**
         * `Фильтруем ключи, чтобы начинались на число и заканчивались на 'jpg'.`
         * @example
         * '2.jpg'
         */
        const keysFilter = keys.filter(item => {
            const split = item.split('.');
            if(!isNaN(Number(split[0])) && split[1] === 'jpg') {
                return item;
            }
        });

        for(let i = 1; i <= keysFilter.length; i++) {
            const obj: TJpgWebp = {
                jpg: images[`${i}.jpg`],
                webp: images[`${i}.webp`] ? images[`${i}.webp`] : undefined,
                avif: images[`${i}.avif`] ? images[`${i}.avif`] : undefined,
                jpg_mobile: images[`${i}_mobile.jpg`] ? images[`${i}_mobile.jpg`] : undefined,
                webp_mobile: images[`${i}_mobile.webp`] ? images[`${i}.webp`] : undefined,
                avif_mobile: images[`${i}_mobile.avif`] ? images[`${i}.avif`] : undefined,
            }
            arrImg.push(obj);
        }
        return arrImg;
    }

    const images = allImg();

    return {
        images
    }
}

export default getAllImages;





