import './galleryMain.scss';
import { useEffect, useState } from 'react';
//* components 
import PictureObserver from '../picture.observer/PictureObserver';
import picturesForPageMain from '../../helper/loadingImgForMainPage';

//= GalleryMain 
const GalleryMain = () => {
    //* hooks 
    const [columsTotal, setColumnsTotal] = useState(3);

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
        document.documentElement.clientWidth > 749 ? setColumnsTotal(3) : setColumnsTotal(2);
    }

    const pictures = columsTotal === 3 ? colums(3, 0) : colums(2, 1);

    //* render 
    return(
            <div className="gallery">
                {pictures}
            </div>
    )
}

export default GalleryMain;