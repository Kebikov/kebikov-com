import './galleryMain.scss';
import { useEffect, useState, useMemo } from 'react';
import usehelpPassAllImg from '../../hooks/usehelpPassAllImg';
//* components 
import PictureObserver from '../picture.observer/PictureObserver';

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
    

    //* code
    const bunDragElement = (e) => {
        if(document.documentElement.clientWidth > 1024) {
            e.target.ondragstart = () => false;
        }
    }

    const allImg = useMemo(() => usehelpPassAllImg(require.context('../../resources/images/main-page/', false, /\.(png|jpe?g|svg|webp)$/)),[] );
    
    const colums = (row, x) => {
        let arrObj = {};
        let key = 0;
        const pictures = [];
        for(let i = 0; i < row; i++) {
            arrObj[i] = [];
            for(let k = 0; k < allImg.length - x; k = k + row) {
                if(allImg[i + k]) {
                    arrObj[i].push(allImg[i + k]);
                }
            }
            pictures.push(createRow(arrObj[i]));
        }

        function createRow(arr) {
            const row = arr.map((item, i) => {
                return (
                    <PictureObserver item={item} key={i} />
                )
            })
            key++;
            return (
                <div className="gallery__column" key={key}>
                    {row}
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