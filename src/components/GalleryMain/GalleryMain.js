import './galleryMain.scss';
import { useEffect } from 'react';
import usehelpPassAllImg from '../../hooks/usehelpPassAllImg';
import useHelperLazyLoad from '../../hooks/useHelperLazyLoad';
import box from '../../resources/images/spiner/box.jpg';

//= GalleryMain 
const GalleryMain = () => {
    //* hooks 
    useEffect(() => {
        const imgObserver = new IntersectionObserver(entryCall, {rootMargin: '0px 0px 0px 0px'});
        const pictureAll = document.querySelectorAll('picture');
        pictureAll.forEach(item => imgObserver.observe(item));
    },[]);
    
    //* code 
    const allImg = usehelpPassAllImg(require.context('../../resources/images/main-page/', false, /\.(png|jpe?g|svg|webp)$/));
    const colums = (row) => {
        let arrObj = {};
        let key = 0;
        const pictures = [];
        for(let i = 0; i < row; i++) {
            arrObj[i] = [];
            for(let k = 0; k < allImg.length; k = k + row) {
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
                            <img src={box} height={'800px'} width={'1200px'} data-src={item[0]} alt={'img'} key={item[0]}/>
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

    const {entryCall} = useHelperLazyLoad();

    const pictures = colums(3);

    //* render 
    return(
            <div className="gallery">
                {pictures}
            </div>
    )
}

export default GalleryMain;