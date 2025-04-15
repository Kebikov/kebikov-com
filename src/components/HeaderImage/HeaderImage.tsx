import './headerImage.scss';
import { memo } from 'react';
import useFontSize from '../../hooks/useFontSize';
import { IMG_header_image as images } from '../../data/image/header-image';


interface IHello {
    size?: number;
    nameOS?: string;
}


const Hello = memo(({
    size,
    nameOS
}: IHello) => {

    
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
                <div className='hello__hi' >
                    ПРИВЕТ !
                </div>
                <h1 className='hello__I hi-text' >
                    Я - Евгений - свадебный фотограф в Минске!
                </h1>
                <div className='hello__text hi-text' >
                    <p>
                        Вот уже 10 лет я запечатлеваю самые искренние эмоции, счастливые улыбки и трепетные взгляды влюблённых. 
                        Для меня свадьба — это не просто событие, а настоящая магия момента, который должен остаться с вами навсегда. 
                        На моем сайте все про свадебную съемку.
                    </p>
                    <p style={{marginTop: '10px'}}>Приятного просмотра.</p>
                </div>
            </div>
        </div>
    )
});


const MainImage = memo(() => {
    
    return(
        <div className='header-image__box-img'>
            <picture>
                <source srcSet={images[1000].avif} type="image/avif" media="(max-width: 767px)" />
                <source srcSet={images[1000].webp} type="image/webp" media="(max-width: 767px)" />
                <source srcSet={images[1000].jpg} type="image/jpeg" media="(max-width: 767px)" />

                <source srcSet={images[1920].avif} type="image/avif" media="(max-width: 1940px)" />
                <source srcSet={images[1920].webp} type="image/webp" media="(max-width: 1940px)" />
                <source srcSet={images[1920].jpg} type="image/jpeg" media="(max-width: 1940px)" />

                <source srcSet={images[2560].avif} type="image/avif" />
                <source srcSet={images[2560].webp} type="image/webp" />
                <img 
                    className="header-image__img" src={images[2560].jpg} 
                    width="1200" height="800"
                    decoding="async"
                    fetchPriority="high"
                    alt="Свадебный фотограф в Минске" 
                />
            </picture>
        </div>
    )
});


const HeaderImage = () => {

    const {nameOS} = useFontSize({maxWidth: 2560, minWidth: 400, maxSize: 18, minSize: 15});

    return(
        <div className='header-image'>
            <div className='header-image__body'>
                {/* <div className='info-test' >{`nameOS = ${nameOS}, scale = ${scaleOS}, size = ${size}`}</div> */}
                <MainImage/>
                <Hello nameOS={nameOS} />
            </div>
        </div>
    )
};


export default HeaderImage;