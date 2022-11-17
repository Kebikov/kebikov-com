import './galleryMain.scss';
import { useEffect, useState } from 'react';
import usehelpPassAllImg from '../../hooks/usehelpPassAllImg';
import useHelperLazyLoad from '../../hooks/useHelperLazyLoad';
import box from '../../resources/images/spiner/box.jpg';

//= GalleryMain 
const GalleryMain = () => {
    //* hooks 
    const [columsTotal, setColumnsTotal] = useState(3);

    useEffect(() => {
        const imgObserver = new IntersectionObserver(entryCall, option);
        const pictureAll = document.querySelectorAll('picture');
        pictureAll.forEach(item => imgObserver.observe(item));
        window.addEventListener('resize', size);
        size();
    },[columsTotal]);
    

    //* code
    const bunDragElement = (e) => {
        if(document.documentElement.clientWidth > 1024) {
            e.target.ondragstart = () => false;
        }
        
    }

    const allImg = usehelpPassAllImg(require.context('../../resources/images/main-page/', false, /\.(png|jpe?g|svg|webp)$/));
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
            const row = arr.map(item => {
                return (
                        <picture className={'anime'} key={item}>
                            <source type="image/webp" data-srcset={item[1]} key={item[1]}/>
                            <img src={box} height={'800px'} width={'1200px'} data-src={item[0]} alt={'Свадебное фото в Минске'} key={item[0]} onLoad={bunDragElement}/>
                        </picture>
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

    const {entryCall, option} = useHelperLazyLoad();

    const pictures = columsTotal === 3 ? colums(3, 0) : colums(2, 1);

    //* render 
    return(
            <div className="gallery">
                {pictures}
            </div>
    )
}

export default GalleryMain;