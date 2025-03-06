import './galleryMain.scss';
import { useEffect, useState } from 'react';
import PictureObserver from '../picture.observer/PictureObserver';
import picturesForPageMain, { IImage } from '../../helper/loadingImgForMainPage';


const GalleryMain = () => {

    const [columsTotal, setColumnsTotal] = useState<number>(4);

    useEffect(() => {
        window.addEventListener('resize', size);
        size();
        return () => {
            window.removeEventListener('resize', size);
        }
    },[columsTotal]);
    


    const colums = (
         /** `количество рядов в галерее` */
        row: number
    ) => {
        let arrObj: Array<IImage[]> = [];
        let key: number = 0;
        const pictures: React.JSX.Element[] = [];

        for(let i = 0; i < row; i++) {
            arrObj[i] = [];
            for(let k = 0; k < picturesForPageMain.length - 1; k = k + row) {
                if(picturesForPageMain[i + k]) {
                    arrObj[i].push(picturesForPageMain[i + k]);
                }
            }
            pictures.push(createRow(arrObj[i]));
        }

        function createRow(arr: IImage[]): React.JSX.Element {
            const rows = arr.map((item, i) => {
                return (
                    <PictureObserver item={item} row={row} key={i} />
                )
            })
            key++;
            return (
                <div className="gallery__column" key={key}>
                    {rows}
                </div>
            )
        }
        return pictures;
    }

    const size = () => {
        document.documentElement.clientWidth > 749 ? setColumnsTotal(4) : setColumnsTotal(2);
    }

    const pictures = columsTotal === 4 ? colums(4) : colums(2);

    return(
            <div className="gallery">
                {pictures}
            </div>
    )
}


export default GalleryMain;