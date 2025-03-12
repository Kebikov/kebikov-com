import './wedding.scss';
import usehelpPassAllImg from '../../hooks/usehelpPassAllImg';
import useHelperLazyLoad from '../../hooks/useHelperLazyLoad';
import box from '../../resources/images/spiner/box.jpg';
import { useEffect } from 'react';

const Wedding = ({link}) => {

    //* hooks 
    useEffect(() => {
        window.scrollTo(0, 0);
        const imgObserver = new IntersectionObserver(entryCall, option);
        const pictureAll = document.querySelectorAll('picture');
        pictureAll.forEach(item => imgObserver.observe(item));
    },[link]);

    const {entryCall, option} = useHelperLazyLoad();

    //* code 
    let allImg = [];
    let title = '';
    
    switch (link) {
        case 'MY':
            title = 'Максим & Юля';
            allImg = usehelpPassAllImg(require.context('../../resources/images/weddings/MY', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'PT':
            title = 'Паша & Таня';
            allImg = usehelpPassAllImg(require.context('../../resources/images/weddings/PT', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'DA':
            title = 'Дима & Алина';
            allImg = usehelpPassAllImg(require.context('../../resources/images/weddings/DA', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'SY':
            title = 'Саша & Юля';
            allImg = usehelpPassAllImg(require.context('../../resources/images/weddings/SY', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'DK':
            title = 'Дима & Ксюша';
            allImg = usehelpPassAllImg(require.context('../../resources/images/weddings/DK', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'SD':
            title = 'Саша & Даша';
            allImg = usehelpPassAllImg(require.context('../../resources/images/weddings/SD', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'SL':
            title = 'Саша & Люда';
            allImg = usehelpPassAllImg(require.context('../../resources/images/weddings/SL', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'NK':
            title = 'Никита & Катя';
            allImg = usehelpPassAllImg(require.context('../../resources/images/weddings/NK', false, /\.(png|jpe?g|svg|webp)$/));
            break;
        case 'JD':
            title = 'Женя & Даша';
            allImg = usehelpPassAllImg(require.context('../../resources/images/weddings/JD', false, /\.(png|jpe?g|svg|webp)$/));
            break;

        default:
            title= 'Error';
            allImg = usehelpPassAllImg(require.context('../../resources/images/weddings/MY', false, /\.(png|jpe?g|svg|webp)$/));
            break;
    }

    const pictures = allImg.map(item => {
        
        return(
            <picture className='anime' key={item}>
                <source data-srcset={item[1]} type="image/webp"/>
                <img src={box} height={'800px'} width={'1200px'} data-src={item[0]} alt="my_alt"/>
            </picture>
        )
    })

    //* render 
    return(
        <>
            <div className="all-title">
                <div className="all-title__line"></div>
                <h1 className="all-title__text">{title}</h1>
                <div className="all-title__line"></div>
            </div>
            <div className="photo">
                {pictures}
            </div>
        </>
    )
}

export default Wedding;