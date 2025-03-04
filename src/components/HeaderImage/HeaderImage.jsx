import './headerImage.scss';
import { memo } from 'react';
import useFontSize from '../../hooks/useFontSize';


const Hello = memo(({size, nameOS}) => {
    
    return(
        <div 
            className='hello' 
            style={{
                backgroundColor: 
                    nameOS === 'IOS' || nameOS === 'iOS' ? 'rgba(0, 0, 0, .35)' 
                    :
                    nameOS === 'Android' ? 'rgba(43, 31, 0, .4)' 
                    :
                    'rgba(0, 0, 0, .45)'
            }}
        >
            <div className='hello__body'>
                <div className='hello__hi' style={{fontSize: `${size * 1.1}px`}} >ПРИВЕТ !</div>
                <h1 className='hello__I' style={{fontSize: `${size * 1.1}px`}} >Я - Евгений - свадебный фотограф в Минске !</h1>
                <div className='hello__text' style={{fontSize: `${size}px`}} >Вот уже 10 лет я запечатлеваю самые искренние эмоции, счастливые улыбки и трепетные взгляды влюблённых. <br/>Для меня свадьба — это не просто событие, а настоящая магия момента, который должен остаться с вами навсегда.</div>
                <h2 className='hello__show' style={{fontSize: `${size}px`}} >На моем сайте все про свадебную съемку. Приятного просмотра.</h2>
            </div>
        </div>
    )
});


const MainImage = memo(() => {
    console.log('render');
    return(
        <div className='header-image__box-img'>
            <picture>
            <source srcSet={require('../../resources/images/header-image/main-mobile.webp')} type="image/webp" media="(max-width: 767px)" />
            <source srcSet={require('../../resources/images/header-image/main-mobile.jpg')} type="image/jpeg" media="(max-width: 767px)" />
                <source srcSet={require('../../resources/images/header-image/main-1920.webp')} type="image/webp" media="(max-width: 1500px)" />
                <source srcSet={require('../../resources/images/header-image/main-1920.jpg')} type="image/jpeg" media="(max-width: 1500px)" />
                <source srcSet={require('../../resources/images/header-image/main-2560.webp')} type="image/webp" />
                <img className="header-image__img" src={require('../../resources/images/header-image/main-2560.jpg')} alt="Свадебный фотограф в Минске" />
            </picture>
        </div>
    )
});


const HeaderImage = () => {

    const {size, nameOS} = useFontSize({maxWidth: 2560, minWidth: 400, maxSize: 18, minSize: 15});

    return(
        <div className='header-image' >
            <div className='header-image__body'>
                {/* <div className='info-test' >{`nameOS = ${nameOS}, scale = ${scaleOS}, size = ${size}`}</div> */}
                <MainImage/>
                <Hello size={size} nameOS={nameOS} />
            </div>
        </div>
    )
};


export default HeaderImage;