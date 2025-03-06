import './galleryMain.scss';
import { useEffect, useState } from 'react';
import PictureObserver from '../picture.observer/PictureObserver';
import picturesForPageMain from '../../helper/loadingImgForMainPage';


/**
 * Block of pictures on page main.
 * @example <GalleryMain/>
 */

const GalleryMain = () => {

    const [columsTotal, setColumnsTotal] = useState(4);

    useEffect(() => {
        window.addEventListener('resize', size);
        size();
        return () => {
            window.removeEventListener('resize', size);
        }
    },[columsTotal]);
    

    const colums = (row, x) => {
        let arrObj = {};
        let key = 0;
        const pictures = [];

        for(let i = 0; i < row; i++) {
            arrObj[i] = [];
            for(let k = 0; k < picturesForPageMain.length - x; k = k + row) {
                if(picturesForPageMain[i + k]) {
                    arrObj[i].push(picturesForPageMain[i + k]);
                }
            }
            pictures.push(createRow(arrObj[i]));
        }

        function createRow(arr) {
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

    const pictures = columsTotal === 4 ? colums(4, 1) : colums(2, 1);

    return(
            <div className="gallery">
                {pictures}
            </div>
    )
}


export default GalleryMain;