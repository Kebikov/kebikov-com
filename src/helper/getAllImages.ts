/// <reference types="webpack-env" />


type RequireContext = __WebpackModuleApi.RequireContext;

type ObjectFromString = {[key in string]: string}

export type TJpgWebp = {
    jpg: string;
    webp: string;
}


const getAllImages = (context: RequireContext, only = 2): TJpgWebp[] => {

    function importAll(context: RequireContext): ObjectFromString {
        let imagesObj: ObjectFromString = {};
        context.keys().forEach((item) => { 
            if(typeof item === 'string' && item.startsWith('./')) {
                /**
                 * `context(item) вернет сформировинный путь к изображению.`
                 * - Например: "/static/media/1.c4d4ce29ae8877a64aa0.jpg"
                 */
                const formedImagePath: string = context(item);
                imagesObj[item.replace('./', '')] = formedImagePath;
            }
        });
        return imagesObj;
    }

    function allImg () {

        const images = importAll(context);

        const arrImg: Array<TJpgWebp> = [];
        let lengthArr = Math.ceil(Object.keys(images).length / only);

        for(let i = 1; i <= lengthArr; i++) {
            const obj: TJpgWebp = {
                jpg: images[`${i}.jpg`],
                webp: images[`${i}.webp`] 
            }
            arrImg.push(obj);
        }
        return arrImg;
    }

    return allImg();
}

export default getAllImages;





